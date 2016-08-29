const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appPath = path.resolve(__dirname, './');
module.exports = {
  devtool: 'eval',
  entry: [`${appPath}/scripts/index.jsx`, `${appPath}/stylus/switch-btn.styl`],
  output: {
    path: './dist',
    publicPath: '/dist',
    filename: 'main.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.styl']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: `${appPath}/scripts`
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css!stylus'),
        include: `${appPath}/stylus`
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('Copyright qiaole@vip.qq.com@Joe.'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: `${appPath}/index.html`, inject: false}),
    new ExtractTextPlugin('main.css', {allChunks: true})
  ],
  devServer: {
    contentBase: './dist',
    colors: true,
    noInfo: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    quiet: true,
    port: 1234,
    host: '0.0.0.0'
  }
};
