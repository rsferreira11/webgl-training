const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
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
        test: /\.(glsl|frag|vert)$/,
        use: 'raw-loader'
      }
    ]
  },
  resolve: {
    modules: [ path.resolve(__dirname, 'src'), 'node_modules' ]
  }
}
