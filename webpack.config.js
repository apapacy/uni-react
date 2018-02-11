const webpack = require('webpack'); //to access built-in
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv == 'development';
const routes = require('./src/react/routes');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&r0eload=true';

const entry = {};
for (let i = 0; i < routes.length; i++ ) {
  entry[routes[i].componentName] = [
    //'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    //'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/client.js',
    './src/react/' + routes[i].componentName + '.js',
    hotMiddlewareScript,
  ];
}

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry,
  //entry: {
  //  app: './src/client.js',
  //  vendor: ['react', 'react-dom']
  //},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevelopment ? '[name].bundle.js': '[name].[hash].bundle.js',
    publicPath: "/static/",
    chunkFilename: isDevelopment ? '[name].bundle.js': '[name].[hash].bundle.js',
  },
  module: {
    rules: [{
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    //new webpack.NoEmitOnErrorsPlugin(),
    //new webpack.optimize.UglifyJsPlugin(),
    //new HtmlWebpackPlugin({
    //  template: './src/index.html'
    //}),
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
  ],
};
