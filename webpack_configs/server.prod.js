/**
 * Author: NERO
 * Date: 2020/5/25 0025
 * Time: 22:31
 *
 */
const path = require('path')
const tsImportPluginFactory = require('ts-import-plugin')

const config = {
  mode: 'production',
  target: 'node',
  entry: path.join(__dirname, '../server/app.ts'),
  output: {
    filename: 'server.js',
    path: path.join(__dirname, '../mock-server-site/'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'source-map-loader' },
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}

module.exports = config

