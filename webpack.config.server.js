const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const regexpReactFolder = new RegExp(`^${path.resolve(__dirname, 'src')}/(react|redux)/.*$`)

module.exports = {
  devtool: 'eval',
  entry: './src/server.js',
  target: 'async-node',
  bail: true,
  externals: [
    nodeExternals(),
    function(context, request, callback) {
      if (request == module.exports.entry || regexpReactFolder.test(path.resolve(context, request))){
        return callback();
      }
      return callback(null, 'commonjs2 ' + request);
     }
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [{
      test: /\.txt$/,
      use: 'raw-loader'
    }, {
      test: /\.jsx?$/,
      exclude: [/node_modules/],
      use: "babel-loader?retainLines=true"
    }]
  }
};
