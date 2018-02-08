'use strict';
const path = require('path');
const webpack = require('webpack');
const compiler = webpack(require('./webpack.config.server'));
const server = path.resolve(__dirname, './src/server.bundle.js');

compiler.compile(function(err, data) {
  if (err) {
    console.log('Server compile error:' + JSON.stringify(err))
    process.exit(5);
  } else {
    watchServerChanges();
  }
});

function initHttpServer() {
  let httpServer;
  try {
    httpServer = require(server);
  } catch(ex) {
    console.log('on require', ex)
    return;
  }
  const sockets = new Map();
  let nextSocketId = 0;
  httpServer.on('connection', function(socket) {
    const socketId = nextSocketId++;
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
  let httpServer;
  const compilerOptions = {
    aggregateTimeout: 300,
    poll: 150,
    ignored: server,
  };
  compiler.watch(compilerOptions, function onServerChange(err, stats) {
    if (err) {
      console.log('Server bundling error:' + JSON.stringify(err));
      return;
    }
    if (httpServer && httpServer.httpServer) {
      httpServer.httpServer.close(function() {
        clearCache();
        httpServer = initHttpServer() || httpServer;
        console.log('Server restarted ' + new Date());
      });
      for (var socket of httpServer.sockets.values()) {
        socket.destroy();
      }
    } else {
      httpServer = initHttpServer();
      console.log('Server bundling done');
    }
  });
}

function clearCache() {
  const cacheIds = Object.keys(require.cache);
  for (let id of cacheIds) {
    if (id === server) {
      delete require.cache[id];
      return;
    }
  }
}
