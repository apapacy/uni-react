'use strict';
const path = require('path');
const webpack = require('webpack');
const compiler = webpack([require('./webpack/config.server')]);
// const serverPath = path.resolve(__dirname, './src/server.bundle.js');
const port = Number(process.env.PORT) || 3000;

const webpackClientConfig = require('./webpack/config.client.dev');
const webpackClientDevMiddleware = require('webpack-dev-middleware');
const webpackClientHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
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

hotApp.use(webpackHotServerMiddleware(compiler));


hotApp.listen(port + 1, () => {
  console.log(`Listening at ${port + 1}`);
});
