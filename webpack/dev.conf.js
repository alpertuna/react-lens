/**
 * webpack/dev.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 28.08.2016
 */

const config = require('./base.conf');

// Webpack Development Settings
module.exports = Object.assign(config, {
  entry: './demo/App.jsx',
  output: {
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'demo',
  },
});
