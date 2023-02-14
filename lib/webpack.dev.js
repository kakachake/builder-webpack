const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const devConfig = {
  mode: "development",
  devtool: "cheap-source-map",
  devServer: {
    hot: true,
  },
};

module.exports = merge(baseConfig, devConfig);
