var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  name: "app",
  entry: "./app.js",
  output: {
    path: './public',
    filename: "script.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
}
