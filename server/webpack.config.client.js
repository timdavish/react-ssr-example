const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  // Root file of our client application
  entry: './src/client/index.js',

  // Where to put the output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
})
