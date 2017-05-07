const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'public/src'),
  entry: './js/script.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'public/src/js')
        ]
      },
      {
        test: /.png|.jpg/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: './dist/'
          }
        }
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: './dist/'
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              devtool: 'source-map'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              devtool: 'source-map'
            }
          }
        ]
      }
    ]
  }
}
