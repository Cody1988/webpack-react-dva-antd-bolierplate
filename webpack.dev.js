
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});






