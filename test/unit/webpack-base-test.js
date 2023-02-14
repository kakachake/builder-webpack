const { expect } = require("chai");

describe("webpack.base.js test case", () => {
  const baseConfig = require("../../lib/webpack.base.js");
  it("entry", () => {
    expect(baseConfig.entry.index.import).include("template/src/index.jsx");
    expect(baseConfig.entry.search.import).include(
      "template/src/search/index.js"
    );
  });
});
