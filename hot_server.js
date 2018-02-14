'use strict';
const path = require('path');
const webpack = require('webpack');
const compiler = webpack([require('./webpack/config.server')]);
const port = Number(process.env.PORT) || 3000;

const webpackClientConfig = require('./webpack/config.client.dev');
const webpackClientDevMiddleware = require('webpack-dev-middleware');
const webpackClientHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const clientCompiler = webpack(webpackClientConfig);
const serverPath = path.resolve(__dirname, './src/render.bundle.js');
let render = require(serverPath);

const api = require('./src/api/routes');



const createServer = require('http').createServer;
const express = require('express');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv === 'development';
const app = express();

app.set('env', nodeEnv);


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


app.use('/static', express.static('dist'))

app.use('/api', api);
app.use('/', (req, res, next) => render(req, res, next));


app.listen(port, () => {
  console.log(`Listening at ${port}`);
});


watch();

function watch() {
  const compilerOptions = {
    aggregateTimeout: 300,
    poll: 150,
  };
  compiler.watch(compilerOptions, onServerChange);
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

function clearCache() {
  const cacheIds = Object.keys(require.cache);
  for (let id of cacheIds) {
    if (id === serverPath) {
      delete require.cache[id];
      return;
    }
  }
}
