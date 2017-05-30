const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './client/reduxtagram',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'client'),
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.styl$/, 
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader',
      },
    ],
  },
  devtool: 'source-map',
};
