const path = require('path')
const tsImportPluginFactory = require('ts-import-plugin')

const config = {
  entry: path.join(__dirname, '../client/index.tsx'),
  output: {
      filename: 'main.js',
      path: path.join(__dirname, '../mock-server-site/static'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ]
      },
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
        test: /\.tsx$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'lib',
                style: true
              })
            ]
          }),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(jpg|png|gif|jpeg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'images/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}

module.exports = config
