const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in
const path = require('path');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: {
    app: './src/client.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [{
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
		new CommonsChunkPlugin({
			name: "common",
      minChunks: 2
			// chunks: ["adminPageA", "adminPageB"]
		}),
  ]
};
