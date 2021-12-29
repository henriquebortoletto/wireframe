const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'react/src/index.js'),
  devServer: {
    static: path.resolve(__dirname, 'react'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: ['react-svg-loader'],
      }
    ]
  }
}