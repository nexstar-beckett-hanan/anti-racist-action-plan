const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
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
          },
        },
      },
      { // css and scss loader
        test: /\.s[ac]ss$/i,
        use: [
          { // bundles the CSS into its own file
            options: {
              publicPath: path.join(__dirname, '/src/css/'),
            },
          },
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
    ],
  },
}
