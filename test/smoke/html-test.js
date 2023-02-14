const fg = require("fast-glob");

describe("Checking generated HTML", function () {
  it("should generate HTML", function (done) {
    const files = fg.sync([
      "./dist/index.html",
      "./dist/search.html",
      "./dist/style/*.css",
    ]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error("no html files generated");
    }
  });
});
