const { expect } = require("chai");

describe("webpack.base.js test case", () => {
  const baseConfig = require("../../lib/webpack.base.js");
  it("entry", () => {
    expect(baseConfig.entry.index.import).to.equal(
      "E:/frontEnd/wjwebpack/webpackMaintainableConfig/builder-webpack/test/smoke/template/src/index.jsx"
    );
    expect(baseConfig.entry.search.import).to.equal(
      "E:/frontEnd/wjwebpack/webpackMaintainableConfig/builder-webpack/test/smoke/template/src/search/index.js"
    );
  });
});
