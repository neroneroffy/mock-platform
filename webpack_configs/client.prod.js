const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseConfig = require('./client.base')
const merge = require('webpack-merge')

const prodConfig = {
  output: {
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
          {loader: 'css-loader'},
          { loader: 'postcss-loader' },
        ]
      },
      {
        test: /\.less/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
          {loader: 'css-loader'},
          { loader: 'postcss-loader' },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          },
        ]
      },
    ]
  },
  mode: 'production',
  devtool: false,
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      // chunkFilename: "css/style.[id].css",
      // allChunks: true
    }),

  ]
}

module.exports = merge(baseConfig, prodConfig)
