'use strict';
const path = require('path');
const createServer = require('http').createServer;
const express = require('express');
const port = Number(process.env.PORT) || 3000;
const api = require('./src/api/routes');
const app = express();
const serverPath = path.resolve(__dirname, './src/render.bundle.js');
let render = require(serverPath);
let serverCompiler

const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv === 'development';
app.set('env', nodeEnv);

if (isDevelopment) {
  const webpack = require('webpack');
  serverCompiler = webpack([require('./webpack/config.server')]);
  const webpackClientConfig = require('./webpack/config.client');
  const webpackClientDevMiddleware = require('webpack-dev-middleware');
  const webpackClientHotMiddleware = require('webpack-hot-middleware');
  const clientCompiler = webpack(webpackClientConfig);
  app.use(webpackClientDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true},
    historyApiFallback: true,
  }));
  app.use(webpackClientHotMiddleware(clientCompiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
  //app.use('/static', express.static('dist'));
  app.use('/api', api);
  app.use('/', (req, res, next) => render(req, res, next));
} else {
  app.use('/static', express.static('dist'));
  app.use('/api', api);
  app.use('/', render);
}

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});


if (isDevelopment) {
  const clearCache = () => {
    const cacheIds = Object.keys(require.cache);
    for (let id of cacheIds) {
      if (id === serverPath) {
        delete require.cache[id];
        return;
      }
    }
  }
  const watch = () => {
    const compilerOptions = {
      aggregateTimeout: 300,
      poll: 150,
    };
    serverCompiler.watch(compilerOptions, onServerChange);
    function onServerChange(err, stats) {
      if (err || stats.compilation && stats.compilation.errors && stats.compilation.errors.length) {
        console.log('Server bundling error:', err || stats.compilation.errors);
      }
      clearCache();
      try {
        render = require(serverPath);
      } catch (ex) {
        console.log('Error detecded', ex)
      }
      return;
    }
  }
  watch();
}
