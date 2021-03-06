const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'main.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}