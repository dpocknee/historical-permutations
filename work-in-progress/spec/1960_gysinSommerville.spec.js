const { expect } = require("chai");
const { sommervilleRotater } = require("../1960_gysinSommerville");

describe("sommervilleRotater", () => {
  it("checks rotation with no position given (positive direction)", () => {
    const actual = sommervilleRotater([1, 2, 3, 4], 2, 1);
    const expected = [1, 2, 4, 3];
    expect(actual).to.eql(expected);
  });
  it("checks rotation with no position given (negative direction)", () => {
    const actual = sommervilleRotater([1, 2, 3, 4], 2, -1);
    const expected = [1, 2, 4, 3];
    expect(actual).to.eql(expected);
  });
  it("checks rotation with starting position given (positive direction)", () => {
    const actual = sommervilleRotater([1, 2, 3, 4], 2, 1, 0);
    const expected = [2, 1, 3, 4];
    expect(actual).to.eql(expected);
  });
  it("checks rotation with starting position given (negative direction)", () => {
    const actual = sommervilleRotater([1, 2, 3, 4], 2, -1, 0);
    const expected = [2, 1, 3, 4];
    expect(actual).to.eql(expected);
  });
  it("checks rotation with position given (positive direction)", () => {
    const actual = sommervilleRotater([1, 2, 3, 4, 5], 2, 1, 2);
    const expected = [1, 2, 4, 3, 5];
    expect(actual).to.eql(expected);
  });
  it("checks rotation with position given (negative direction)", () => {
    const actual = sommervilleRotater([1, 2, 3, 4, 5], 2, -1, 2);
    const expected = [1, 2, 4, 3, 5];
    expect(actual).to.eql(expected);
  });
});
