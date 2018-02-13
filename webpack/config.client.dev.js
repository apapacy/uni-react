const webpack = require('webpack'); //to access built-in
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv === 'development';
const routes = require('../src/react/routes');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr&timeout=20000';

const entry = {};
for (let i = 0; i < routes.length; i++ ) {
  entry[routes[i].componentName] = [
    '../src/client.js',
    '../src/react/' + routes[i].componentName + '.js',
  ];
  if (isDevelopment) {
    entry[routes[i].componentName].unshift(hotMiddlewareScript);
  }
}

module.exports = {
  target: 'web',
  cache: isDevelopment,
  devtool: isDevelopment ? 'cheap-module-source-map' : 'hidden-source-map',
  context: __dirname,
  entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: isDevelopment ? 'http://localhost:3001/static/' : '/static/',
    filename: isDevelopment ? '[name].bundle.js': '[name].[hash].bundle.js',
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
        loader: "babel-loader",
        options: {
          cacheDirectory: isDevelopment,
          babelrc: false,
          presets: [
            'es2015',
            'react',
            'stage-0',
            'stage-3',
          ],
          plugins: [
            //"dynamic-import-webpack",
            "transform-runtime",
            "syntax-dynamic-import",
            //"universal-import",
            ["react-transform", {
                    "transforms": [{
                      "transform": "react-transform-hmr",
                      // if you use React Native, pass "react-native" instead:
                      "imports": ["react"],
                      // this is important for Webpack HMR:
                      "locals": ["module"]
                    }]
                    // note: you can put more transforms into array
                    // this is just one of them!
                  }],
          ],
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    //new webpack.NoEmitOnErrorsPlugin(),
    //new webpack.optimize.UglifyJsPlugin(),
    //new HtmlWebpackPlugin({
    //  template: './src/index.html'
    //}),
		//new CommonsChunkPlugin({
		//	name: "common",
    //  minChunks: 2
			// chunks: ["adminPageA", "adminPageB"]
    //}),
    function(compiler) {
  		this.plugin("done", function(stats) {
  		    require("fs").writeFileSync(path.join(__dirname, "../dist", "stats.generated.js"),
           'module.exports=' + JSON.stringify(stats.toJson().assetsByChunkName) + ';console.log(module.exports);\n');
      });
    }
  ],
};
