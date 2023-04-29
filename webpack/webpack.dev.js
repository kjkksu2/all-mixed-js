const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  output: {
    filename: "[name]/bundle.js",
  },
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    port: 9000,
    hot: true,
    static: { directory: path.join(__dirname, "../dist") },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
    client: { overlay: true },
    liveReload: false,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              module: {
                localIdentName: "[path][name]__[local]",
              },
            },
          },
        ],
      },
    ],
  },
});
