const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './client/reduxtagram',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
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
