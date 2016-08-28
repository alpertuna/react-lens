/**
 * webpack/dist.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 28.08.2016
 */

const config = require('./base.conf');

// Webpack Production Settings
module.exports = Object.assign(config, {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'react-lens.js',
    library: 'ReactLens',
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: true,
      /*react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },*/
    },
  ],
});
