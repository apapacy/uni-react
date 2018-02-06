const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: './src/server.js',
  target: 'node',
  externals: [
    nodeExternals(),
    /\/api\/.*$/
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
      test: /\.js$/,
      exclude: [/node_modules/],
      use: "babel-loader"
    }]
  }
};
