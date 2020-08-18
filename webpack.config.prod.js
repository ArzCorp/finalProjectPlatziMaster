const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlWebpack = require('add-asset-html-webpack-plugin');
const dll = require('./modules-manifest.json');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  mode: 'production',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          { loader: 'url-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Our Clothes',
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new webpack.DllReferencePlugin({
      manifest: dll,
    }),
    new AddAssetHtmlWebpack({
      filepath: path.resolve(__dirname, './dist/*.dll.js'),
    }),
  ],
  optimization: {
    splitChunks: {
      name: 'commons',
      minSize: 0,
      chunks: 'all',
    },
  },
};
