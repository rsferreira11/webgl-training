const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src', 'js', 'index.js'),
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 3000,
    watchContentBase: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: path => ['.glsl', '.frag', '.vert'].reduce((acc, cur) => acc || path.includes(cur), false),
        use: 'raw-loader'
      }
    ]
  }
}