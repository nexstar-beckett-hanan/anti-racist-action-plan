const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/app.jsx'),
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  plugins: [
		new HtmlWebpackPlugin({
			title: 'Do Something | Anti-Racist Action',
			template: './src/index.html',
			filename: 'index.html'
		})
	],
  devServer: {
    publicPath: '/public/',
    contentBase: path.join(__dirname, '/src'),
    proxy: {
      '/api**': {
        target: 'http://localhost:3000/',
      },
    }
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      { // js and jsx loader
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      { // css loader
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ]
      },
    ],
  },
}
