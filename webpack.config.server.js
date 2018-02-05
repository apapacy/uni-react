const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'cheap-module-inline-source-map',

  // set this to your server entry point. This should be where you start
  // your express server with .listen()
  entry: './src/server/express.js',

  // tell webpack this bundle will be used in nodejs environment.
  target: 'node',

  // Omit node_modules code from the bundle. You don't want and don't
  // need them in the bundle.
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist'),
    filename: 'server.bundle.js',

    // IMPORTANT! Add module.exports to the beginning of the bundle
    // so your main module is exposed to the consumer of the bundle.
    libraryTarget: 'commonjs2'
  },
  // The rest of the config is pretty standard and can contain
  // other webpack stuff you need.
  module: {
   rules: [
     { test: /\.txt$/, use: 'raw-loader' },
     { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }
   ]
  }
};
