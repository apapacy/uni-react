const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: ['babel-polyfill', './src/client.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.[hash].js'
  },
  module: {
    rules: [{
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
