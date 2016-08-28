/**
 * webpack/base.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 28.08.2016
 */

// Webpack Base Settings
module.exports = {
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
      },
    ],
  },
};
