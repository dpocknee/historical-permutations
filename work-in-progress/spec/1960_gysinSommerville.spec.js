const { expect } = require("chai");
const { gysinRotater } = require("../1960_gysinSommerville");

describe("gysinRotater", () => {
  it("checks rotation with no position given (positive direction)", () => {
    const actual = gysinRotater([1, 2, 3, 4], 2, 1);
    const expected = [1, 2, 4, 3];
    expect(actual).to.eql(expected);
  });
  it("checks rotation with no position given (negative direction)", () => {
    const actual = gysinRotater([1, 2, 3, 4], 2, -1);
    const expected = [1, 2, 4, 3];
    expect(actual).to.eql(expected);
  });
  it("checks rotation with position given (positive direction)", () => {
    const actual = gysinRotater([1, 2, 3, 4, 5], 2, 1, 2);
    const expected = [1, 2, 4, 3, 5];
    expect(actual).to.eql(expected);
  });
  it("checks rotation with position given (negative direction)", () => {
    const actual = gysinRotater([1, 2, 3, 4, 5], 2, -1);
    const expected = [1, 2, 4, 3, 5];
    expect(actual).to.eql(expected);
  });
});
