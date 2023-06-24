const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  output: {
    filename: "[name]/[contenthash:12].js",
  },
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        purify: {
          test: /[\\/]node_modules[\\/]dompurify[\\/]/,
          chunks: "initial",
          name: "purify",
          priority: 1,
        },
        node_modules: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          name: "node_modules",
          priority: 0,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]/[contenthash:12].css",
    }),
  ],
});
