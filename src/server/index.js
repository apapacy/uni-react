require('babel-polyfill');
const webpack = require('webpack');
const compiler = webpack(require('../../webpack.config.server'));
compiler.run(function(err){
  console.log(err)
  watchServerChanges();
});



 // Starts the express server. Caches sockets and delete those caches
 // on socket close. Returns the running http.Server object and the
 // socket Map cache.
 function initHttpServer() {
   // start the server, getting back a reference to http.Server
   const httpServer = require('../../dist/server.bundle.js');
   const sockets = new Map(); // cache all sockets in a Map
   let nextSocketId = 0;

   httpServer.on('connection', function (socket) {
     var socketId = nextSocketId++;
     sockets.set(socketId, socket);

     // remove socket from Map on close.
     // this is not where we terminate the socket! That happens
     // in webpack.watch done handler below
     socket.on('close', function () {
       sockets.delete(socketId);
     });
   });

   return {httpServer, sockets};
 }

 function watchServerChanges() {

     // contains the running http.Server and socket cache
     let httpServerInitObject;
     let initialLoad = true;
     const compiler = webpack(require('../../webpack.config.server'));
     const compilerOptions = {
       aggregateTimeout: 300, // wait so long for more changes
       poll: true // use polling instead of native watchers
     };

     // watch file changes
     compiler.watch(compilerOptions, function onServerChange(err, stats){
       if (err) {
         console.log('Server bundling error:' + JSON.stringify(err));
         return;
       }

       if (initialLoad) {
         // first time run, just start the server, no need to restart
         initialLoad = false;
         httpServerInitObject = initHttpServer();
         console.log('Server bundling done');
       } else {
         // subsequent runs need to close the server and restart
         // call close() method, but this won't complete until all
         // sockets are destroyed below.
         httpServerInitObject.httpServer.close(function () {
           // if we reach this step, that means we have succeeded
           // in shutting down the server!!! Omg fuck yea!
           httpServerInitObject = initHttpServer(); // re-start
           console.log('Server restarted ' + new Date());
         });

         // This is where the magic happens: destroy all open sockets
         for (var socket of httpServerInitObject.sockets.values()) {
           socket.destroy();
         }
       }
     });
   }
