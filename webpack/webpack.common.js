const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    chart: "./src/pages/chart",
    drag: "./src/pages/drag",
    myArray: "./src/pages/myArray",
    myPromise: "./src/pages/myPromise",
    myString: "./src/pages/myString",
    polygon: "./src/pages/polygon",
    canvas: "./src/pages/canvas",
  },
  output: {
    path: path.join(__dirname, "../dist"),
    publicPath: "http://localhost:3000/",
  },
  optimization: {
    // entry point가 여러 개면 hot module이 동작 안함.
    // https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/88#issuecomment-627558799
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb 이상이면 asset/resource, 4kb 미만이면 asset/inline
          },
        },
        generator: {
          filename: "canvas/[name][ext]",
        },
      },
      {
        test: /\.txt$/,
        type: "asset/resource",
        generator: {
          filename: (pathData) => {
            const filePath = path.dirname(pathData.filename).split("/")[2];
            return `${filePath}/[name][ext]`;
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "chart/index.html",
      chunks: ["chart"],
      template: "./src/pages/chart/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "drag/index.html",
      chunks: ["drag"],
      template: "./src/pages/drag/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "myArray/index.html",
      chunks: ["myArray"],
      template: "./src/pages/myArray/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "myPromise/index.html",
      chunks: ["myPromise"],
      template: "./src/pages/myPromise/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "myString/index.html",
      chunks: ["myString"],
      template: "./src/pages/myString/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "polygon/index.html",
      chunks: ["polygon"],
      template: "./src/pages/polygon/index.html",
    }),
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   chunks: ["global", "navigation"],
    //   title: "Home",
    //   template: "./src/pages/custom/template.html",
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "canvas/index.html",
    //   chunks: ["global", "navigation", "canvas"],
    //   title: "Canvas",
    //   template: "./src/pages/canvas/template.html",
    // }),
  ],
};
