const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const prodConfig = {
  entry: {
    "ssr-entry": path.resolve(process.cwd(), "./src/ssr-entry.js"),
  },
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "dist"),
    library: {
      type: "umd",
      export: "default",
    },
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
      },
      { test: /\.css$/, loader: "ignore-loader" },
    ],
  },
};

module.exports = merge(baseConfig, prodConfig);
