const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src')

const config = {
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
              use: "css-loader?modules,localIdentName='[name]-[local]-[hash:base64:6]',camelCase"
        })

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new DashboardPlugin(),
    new ExtractTextPlugin('style.css')
  ]
}

module.exports = config
