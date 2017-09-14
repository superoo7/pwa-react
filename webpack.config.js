const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const srcDir = path.resolve(__dirname, 'build');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: srcDir
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
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `src/index.html`
    }),
    new DashboardPlugin()
  ]
}

module.exports = config
