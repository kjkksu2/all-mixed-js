const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    global: "./src/components/global",
    navigation: "./src/components/navigation",
    custom: "./src/pages/custom",
    canvas: "./src/pages/canvas",
  },
  output: {
    path: path.join(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        type: "asset/resource",
        generator: {
          filename: "custom/[name][ext]",
        },
      },
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
      chunks: ["global", "navigation"],
      title: "Home",
      template: "./src/pages/custom/template.html",
    }),
    new HtmlWebpackPlugin({
      filename: "custom/index.html",
      chunks: ["global", "navigation", "custom"],
      title: "Custom",
      template: "./src/pages/custom/template.html",
    }),
    new HtmlWebpackPlugin({
      filename: "canvas/index.html",
      chunks: ["global", "navigation", "canvas"],
      title: "Canvas",
      template: "./src/pages/custom/template.html",
    }),
  ],
};
