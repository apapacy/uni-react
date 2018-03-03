const webpack = require('webpack');
const path = require('path');
const { splitChuncks } = webpack.optimize;

const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv === 'development';
const routes = require('../src/react/routes');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000';
const entry = {};

for (let i = 0; i < routes.length; i++) {
  entry[routes[i].componentName] = [
    '../src/client.js',
    `../src/react/${routes[i].componentName}.js`,
  ];
  if (isDevelopment) {
    entry[routes[i].componentName].unshift(hotMiddlewareScript);
  }
}

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  name: 'client',
  target: 'web',
  cache: isDevelopment,
  devtool: isDevelopment ? 'cheap-module-source-map' : 'hidden-source-map',
  context: __dirname,
  entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: isDevelopment ? '/static/' : '/static/',
    filename: isDevelopment ? '[name].bundle.js' : '[name].[hash].bundle.js',
    chunkFilename: isDevelopment ? '[name].bundle.js' : '[name].[hash].bundle.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: isDevelopment,
        babelrc: false,
        presets: [
          'es2015',
          'es2017',
          'react',
          'stage-0',
          'stage-3',
        ],
        plugins: [
          'transform-runtime',
          'syntax-dynamic-import',
        ].concat(isDevelopment ? [
          ['react-transform', {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module'],
            }],
          }],
        ] : [
        ]),
      },
    }],
  },
  optimization: {
    minimize: !isDevelopment,
    runtimeChunk: { name: 'common' },
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          //test: /\.jsx?$/,
          test: /\.\.\/src\/client\.js/,
          chunks: 'all',
          minChunks: 2,
          name: 'common',
          enforce: true,
          maxAsyncRequests: 1,
          maxInitialRequests: 1,
        },
      },
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    function StatsPlugin() {
      this.plugin('done', stats =>
        require('fs').writeFileSync( // eslint-disable-line no-sync, global-require
          path.join(__dirname, '../dist', 'stats.generated.js'),
          `module.exports=${JSON.stringify(stats.toJson().assetsByChunkName)};\n`
        ));
    },
  ].concat(isDevelopment ? [
    new webpack.HotModuleReplacementPlugin(),
  ] : [
  ]),
};
