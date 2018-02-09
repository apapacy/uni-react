const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in
const path = require('path');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv == 'development';
const routes = require('./src/react/routes');

const entry = {};
for (let i = 0; i < routes.length; i++ ) {
  entry[routes[i].componentName] = [
    './src/client.js',
    './src/react/' + routes[i].componentName + '.js'
  ];
}

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry,
  //entry: {
  //  app: './src/client.js',
  //  vendor: ['react', 'react-dom']
  //},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevelopment ? '[name].bundle.js': '[name].[hash].bundle.js',
    // chunkFilename: isDevelopment ? '[name].bundle.js': '[name].[hash].bundle.js',
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
    function(compiler) {
  		this.plugin("done", function(stats) {
  		    require("fs").writeFileSync(path.join(__dirname, "dist", "stats.generated.js"),
           'module.exports=' + JSON.stringify(stats.toJson().assetsByChunkName) + ';console.log(module.exports);\n');
      });
    }
  ]
};
