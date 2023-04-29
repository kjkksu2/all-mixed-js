const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    "custom-object": "./src/pages/custom-object",
    polygons: "./src/pages/polygons",
  },
  output: {
    path: path.join(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: [],
      title: "Custom Object",
      template: "./src/template.html",
    }),
    new HtmlWebpackPlugin({
      filename: "custom-object/index.html",
      chunks: ["custom-object"],
      title: "Custom Object",
      template: "./src/template.html",
    }),
    new HtmlWebpackPlugin({
      filename: "polygons/index.html",
      chunks: ["polygons"],
      title: "Polygons",
      template: "./src/template.html",
    }),
  ],
};
