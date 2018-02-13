'use strict';
const path = require('path');
const webpack = require('webpack');
const compiler = webpack(require('./webpack/config.server'));
const serverPath = path.resolve(__dirname, './src/server.bundle.js');
const port = process.env.PORT || 3001;

watch();

function watch() {
  let server;
  const compilerOptions = {
    aggregateTimeout: 300,
    poll: 150,
  };
  compiler.watch(compilerOptions, onServerChange);
  function onServerChange(err, stats) {
    if (err || stats.compilation.errors && stats.compilation.errors.length) {
      console.log('Server bundling error:', err || stats.compilation.errors);
      clearCache();
      try {
        require(serverPath);
      } catch (ex) {
        console.log('Error detecded', ex)
      }
      return;
    }
    if (server) {
      for (const socket of server.sockets.values()) {
        socket.destroy();
      }
      server.httpServer.close(function() {
        server = initHttpServer();
        console.log('Server restarted ' + new Date());
      });
    } else {
      server = initHttpServer();
      console.log('Server bundling done '  + new Date());
    }
  }
}

function initHttpServer() {
  let httpServer;
  try {
    clearCache();
    httpServer = require(serverPath);
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
    if (id === serverPath) {
      delete require.cache[id];
      return;
    }
  }
}

const webpackClientConfig = require('./webpack/config.client.dev');
const webpackClientDevMiddleware = require('webpack-dev-middleware');
const webpackClientHotMiddleware = require('webpack-hot-middleware');
const clientCompiler = webpack(webpackClientConfig);
const hotApp = require('express')();

hotApp.use(webpackClientDevMiddleware(clientCompiler, {
  publicPath: webpackClientConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true},
  historyApiFallback: true,
}));

hotApp.use(webpackClientHotMiddleware(clientCompiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

hotApp.listen(port, () => {
  console.log(`Listening at ${port}`);
});
