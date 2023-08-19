const p2 = require("./p2");
const assert = require("chai").assert;

describe("p2", function () {
  
  describe("update", function () {
    it("should return {Bob:0} when names is {} and name is Bob", function () {
      assert.deepEqual(p2.update({}, "Bob"), {Bob: 0});
    });
    it("should return {Bob:2} when names is {Bob:1} and name is Bob", function () {
      assert.deepEqual(p2.update({Bob: 1}, "Bob"), {Bob: 2});
    });
    it("should return {Bob:1} when names is {Bob:1} and name is Tom", function () {
      assert.deepEqual(p2.update({Bob: 1}, "Tom"), {Bob: 1, Tom: 0});
    });
  });
  
  describe("formatName", function () {
    it("should return Bob when name is bob", function () {
      assert.strictEqual(p2.formatName("bob"), "Bob");
    });
    it("should return Bob when name is BOB", function () {
      assert.strictEqual(p2.formatName("BOB"), "Bob");
    });
    it("should return Bob when name is bOB", function () {
      assert.strictEqual(p2.formatName("bOB"), "Bob");
    });
    it("should return Bob when name is Bob", function () {
      assert.strictEqual(p2.formatName("Bob"), "Bob");
    });
  });
  
});