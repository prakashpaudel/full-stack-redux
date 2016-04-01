var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  devServer: {
  	contentBase: './dist'
  },
  // module: {
  //   loaders: [
  //     {test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"]}
  //   ]
  // },
  plugins: [
  	HTMLWebpackPluginConfig,
  	new webpack.HotModuleReplacementPlugin()
  ]
};