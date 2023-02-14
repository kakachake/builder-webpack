const fg = require("fast-glob");

describe("Checking generated CSS", function () {
  it("should generate CSS", function (done) {
    const files = fg.sync(["./dist/index-*.js", "./dist/search-*.js"]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error("no CSS files generated");
    }
  });
});
