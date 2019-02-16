const assert = require("assert");
const {add}   = require("../add");
describe("add", function() {
  it("should return the add of two number", function() {
    assert.equal(add(7, 7), 14);
  });
  it("should return the add of two negative number", function() {
    assert.equal(add(-7, -7), -14);
  });
});
