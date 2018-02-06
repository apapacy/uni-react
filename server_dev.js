require('babel-polyfill');
path = require('path');
const webpack = require('webpack');
const compiler = webpack(require('./webpack.config.server'));
compiler.run(function(err, data) {
  if (err) {
    console.log('Server compile error:' + JSON.stringify(err))
    process.exit(5);
  } else {
    watchServerChanges();
  }
});



 // Starts the express server. Caches sockets and delete those caches
 // on socket close. Returns the running http.Server object and the
 // socket Map cache.
 function initHttpServer() {
   // start the server, getting back a reference to http.Server
   const httpServer = require('./dist/server.bundle.js');
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
         initialLoad = false;
         httpServerInitObject = initHttpServer();
         console.log('Server bundling done');
       } else {
         httpServerInitObject.httpServer.close(function () {
           clearCache();
           httpServerInitObject = initHttpServer();
           console.log('Server restarted ' + new Date());
         });
         for (var socket of httpServerInitObject.sockets.values()) {
           socket.destroy();
         }
       }
     });
   }

function clearCache() {
  const cacheIds = Object.keys(require.cache);
  for(let id of cacheIds) {
    if (id === path.resolve(__dirname, 'dist', 'server.bundle.js')) {
      delete require.cache[id];
      return;
    }
  }
}
