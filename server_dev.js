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

function initHttpServer() {
  const httpServer = require('./src/server.bundle.js');
  const sockets = new Map();
  let nextSocketId = 0;
  httpServer.on('connection', function(socket) {
    var socketId = nextSocketId++;
    sockets.set(socketId, socket);
    socket.on('close', function() {
      sockets.delete(socketId);
    });
  });
  return {
    httpServer,
    sockets
  };
}

function watchServerChanges() {
  let httpServerInitObject;
  let initialLoad = true;
  const compilerOptions = {
    aggregateTimeout: 300,
    poll: true
  };
  compiler.watch(compilerOptions, function onServerChange(err, stats) {
    if (err) {
      console.log('Server bundling error:' + JSON.stringify(err));
      return;
    }
    if (initialLoad) {
      initialLoad = false;
      httpServerInitObject = initHttpServer();
      console.log('Server bundling done');
    } else {
      httpServerInitObject.httpServer.close(function() {
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
  for (let id of cacheIds) {
    if (id === path.resolve(__dirname, 'src', 'server.bundle.js')) {
      delete require.cache[id];
      return;
    }
  }
}
