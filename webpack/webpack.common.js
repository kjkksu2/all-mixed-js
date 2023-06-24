const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    chart: "./src/pages/chart",
    drag: "./src/pages/drag",
    flappyMonster: "./src/pages/flappyMonster",
    myArray: "./src/pages/myArray",
    myPromise: "./src/pages/myPromise",
    myString: "./src/pages/myString",
    polygon: "./src/pages/polygon",
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
          filename: (pathData) => {
            const directoryName = path.dirname(pathData.filename).split("/")[2];
            return `${directoryName}/images/[name][ext]`;
          },
        },
      },
      {
        test: /\.txt$/,
        type: "asset",
        generator: {
          filename: (pathData) => {
            const directoryName = path.dirname(pathData.filename).split("/")[2];
            return `${directoryName}/examples/[name][ext]`;
          },
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
    new CopyPlugin({
      patterns: [
        {
          from: "src/pages/myArray/examples/prototype",
          to: "myArray/examples",
        },
        {
          from: "src/pages/myArray/examples/static",
          to: "myArray/examples",
        },
        {
          from: "src/pages/myPromise/examples",
          to: "myPromise/examples",
        },
        {
          from: "src/pages/myString/examples/prototype",
          to: "myString/examples",
        },
      ],
    }),
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
      filename: "flappyMonster/index.html",
      chunks: ["flappyMonster"],
      template: "./src/pages/flappyMonster/index.html",
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
  ],
};
