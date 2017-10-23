const path = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCssPlugin = require('purifycss-webpack')

module.exports = {
  context: path.resolve(__dirname, 'public/src'),
  entry: './js/script.js',
  //devtool: 'source-map',
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
            publicPath: '/dist/'
          }
        }
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/dist/'
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                precision: 8
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => ([
                  require('autoprefixer')
                ])
              }
            },
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new PurifyCssPlugin({
      paths: glob.sync(path.join(__dirname, './app_server/views/**/*.hbs')),
      purifyOptions: {
        minify: true,
        whitelist: ['*mobile-nav.show*']
      }
    })
  ]
}
