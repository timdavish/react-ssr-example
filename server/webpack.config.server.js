const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  // Building a bundle for nodeJS, not browser
  target: 'node',

  // Root file of our server application
  entry: './src/index.js',

  // Where to put the output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Don't bundle node modules
  externals: [webpackNodeExternals()],
})
