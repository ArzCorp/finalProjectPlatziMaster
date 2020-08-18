const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'redux',
    ],
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
};
