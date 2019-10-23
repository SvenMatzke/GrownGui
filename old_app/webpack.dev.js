const merge = require('webpack-merge');
const common = require('./webpack.pwa.js/index.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});
