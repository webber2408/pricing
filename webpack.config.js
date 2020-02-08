const path = require('path');
const { CleanWebpackPlugin  } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins
const roots = [
  path.join(__dirname, 'node_modules')
];

module.exports = {
  entry: "./src/lead-pricing.js",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: roots
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
        }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:9000/',
    historyApiFallback:true,
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './index.html', baseUrl: '/'}),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.ProgressPlugin(),
    new CopyWebpackPlugin([{from: 'images/**/*.*',to: './',context: './',},]),
    new CopyWebpackPlugin([{from: 'node_modules/@webcomponents/webcomponentsjs/**/*.js',to: './',context: './',},]),
    new CopyWebpackPlugin([{from: 'node_modules/web-animations-js/*.js',to: './',context: './',},])
  ],
  mode: 'development'
};
