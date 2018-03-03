const path = require('path');
const express = require('express');
const port = Number(process.env.PORT) || 3000;
const api = require('./src/api/routes');
const app = express();
const cookieParser = require('cookie-parser');
const cookieEncrypter = require('cookie-encrypter');
const bodyParser = require('body-parser');
const serverPath = path.resolve(__dirname, './dist/render.bundle.js');
let render = require(serverPath);
let serverCompiler;
const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv === 'development';
const apicache = require('apicache');
const cache = apicache.options({
  appendKey: req => req.get('Authorization'),
  defaultDuration: 1000,
  headerBlacklist: ['Authorization', 'authorization'],
}).middleware;

app.set('env', nodeEnv);
app.use(cookieParser('change secret value'));
app.use(cookieEncrypter('change secret value'));
app.use(bodyParser.json());
app.use('/api', api);

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackClientConfig = require('./webpack/config.client');
  const webpackClientDevMiddleware = require('webpack-dev-middleware');
  const webpackClientHotMiddleware = require('webpack-hot-middleware');
  const clientCompiler = webpack(webpackClientConfig);
  const serverConfig = require('./webpack/config.server');

  serverCompiler = webpack(serverConfig);
  app.use(webpackClientDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true },
    historyApiFallback: true,
  }));
  app.use(webpackClientHotMiddleware(clientCompiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
  // app.use('/static', express.static('dist'));
  app.use('/api', api);
  app.use('/', (req, res, next) => render(req, res, next));
} else {
  app.use('/static', express.static('dist'));
  app.use('/api', api);
  app.use('/', cache(1000), render);
}

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});


if (isDevelopment) {
  const clearCache = () => { // eslint-disable-line func-style
    const cacheIds = Object.keys(require.cache);

    cacheIds.forEach((id) => {
      if (id === serverPath) {
        delete require.cache[id];
      }
    });
  };

  const watch = () => { // eslint-disable-line func-style
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
        console.log('Error detecded', ex);
      }
    }
  };

  watch();
}
