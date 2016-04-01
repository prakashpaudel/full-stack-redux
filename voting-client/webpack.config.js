var webpack = require('webpack')

module.exports = {
  entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080',
		'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
  	contentBase: './dist',
  	hot: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: "react-hot!babel"
    }]
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin()
  ]
};