const merge = require('webpack-merge')
const baseConfig = require('./client.base')
const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

const devConfig = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, '../client/index.tsx'),
  ],

  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
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
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8070',
    inline: true,
    overlay: {
      error: true,
    },
    contentBase: path.join(__dirname, '../public'),
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      title: '接口模拟工具',
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html'),
    }),
  ]

}

module.exports = merge(baseConfig, devConfig)