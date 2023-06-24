const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  output: {
    filename: "[name]/bundle.js",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    static: { directory: path.join(__dirname, "../dist") },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
    client: { overlay: true },
    liveReload: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
