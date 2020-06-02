const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/app.jsx'),
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  devServer: {
    publicPath: '/build/',
    contentBase: path.join(__dirname, '/src'),
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
      // { // JSON loader
      //   type: 'javascript/auto',
      //   test: /\.json$/,
      //   use: [
      //       {
      //         loader: 'file-loader',
      //       }
      //   ]
      // },
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
