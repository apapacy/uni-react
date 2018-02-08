'use strict';
const path = require('path');
const webpack = require('webpack');
const compiler = webpack(require('./webpack.config.server'));
const server = path.resolve(__dirname, './src/server.bundle.js');

/*compiler.plugin("done", function(stats) {
  if (started) {
    return;
  }
  if (stats.compilation.errors && stats.compilation.errors.length) {
    console.log('Server compile errors:', stats.compilation.errors);
    require(server);
    process.exit(5);
  } else {
    started = true;
    watchServerChanges();
  }
});*/



let httpServer;
const compilerOptions = {
  aggregateTimeout: 300,
  poll: 150,
  ignored: server,
};

compiler.watch(compilerOptions, onServerChange);

function onServerChange(err, stats) {
  if (err) {
    console.log('Server bundling error:', err);
    return true;
  }
  if (httpServer && httpServer.httpServer) {
    httpServer.httpServer.close(function() {
      httpServer = initHttpServer();
      console.log('Server restarted ' + new Date());
    });
    for (var socket of httpServer.sockets.values()) {
      socket.destroy();
    }
  } else {
    httpServer = initHttpServer();
    console.log('Server bundling done');
  }
}

function initHttpServer() {
  try {
    clearCache();
    httpServer = require(server);
  } catch (ex) {
    console.log('Module require error: ', ex)
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
  return { httpServer, sockets };
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
