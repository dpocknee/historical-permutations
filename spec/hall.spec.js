const { expect } = require("chai");
const { uniq, uniqWith, isEqual } = require("lodash");

const { radixCounter } = require("../algorithms/1960_hall");
const { hall } = require("../index");

describe("Hall (1960)", () => {
  describe("Radix Counter", () => {
    describe("2 element array", () => {
      it("[0, 0]", () => expect(radixCounter([0, 0])).to.eql([0, 1]));
      it("[0, 1]", () => expect(radixCounter([0, 1])).to.eql([0, 2]));
      it("[0, 2]", () => expect(radixCounter([0, 2])).to.eql([1, 0]));
      it("[1, 0]", () => expect(radixCounter([1, 0])).to.eql([1, 1]));
      it("[1, 1]", () => expect(radixCounter([1, 1])).to.eql([1, 2]));
      it("[1, 2]", () => expect(radixCounter([1, 2])).to.equal(false));
    });
    describe("3 element array", () => {
      it("[0, 0, 0]", () => expect(radixCounter([0, 0, 0])).to.eql([0, 0, 1]));
      it("[0, 0, 1]", () => expect(radixCounter([0, 0, 1])).to.eql([0, 0, 2]));
      it("[0, 0, 2]", () => expect(radixCounter([0, 0, 2])).to.eql([0, 0, 3]));
      it("[0, 1, 0]", () => expect(radixCounter([0, 1, 0])).to.eql([0, 1, 1]));
      it("[0, 1, 1]", () => expect(radixCounter([0, 1, 1])).to.eql([0, 1, 2]));
      it("[0, 1, 2]", () => expect(radixCounter([0, 1, 2])).to.eql([0, 1, 3]));
      it("[0, 1, 3]", () => expect(radixCounter([0, 1, 3])).to.eql([0, 2, 0]));
      it("[0, 2, 0]", () => expect(radixCounter([0, 2, 0])).to.eql([0, 2, 1]));
      it("[0, 2, 1]", () => expect(radixCounter([0, 2, 1])).to.eql([0, 2, 2]));
      it("[0, 2, 2]", () => expect(radixCounter([0, 2, 2])).to.eql([0, 2, 3]));
      it("[0, 2, 3]", () => expect(radixCounter([0, 2, 3])).to.eql([1, 0, 0]));
      it("[1, 0, 0]", () => expect(radixCounter([1, 0, 0])).to.eql([1, 0, 1]));
      it("[1, 1, 3]", () => expect(radixCounter([1, 1, 3])).to.eql([1, 2, 0]));
      it("[1, 2, 3]", () => expect(radixCounter([1, 2, 3])).to.equal(false));
    });
  });
  describe("5 Elements", () => {
    const startArray = [1, 2, 3, 4, 5];
    const testArrays = hall(5);
    // console.log(testArrays);
    it("checks an array of 5 elements outputs 120 permutations", () => {
      expect(testArrays.length).to.equal(120);
    });
    it("checks all 120 permutations are unique", () => {
      const uniqueTest = uniqWith(testArrays, isEqual).length;
      expect(uniqueTest).to.equal(120);
    });
    it("checks all permutations only contain one of every element", () => {
      const singularElements = testArrays.every(
        array => uniq(array).length === array.length
      );
      expect(singularElements).to.equal(true);
    });
    it("checks each permutation only uses valid elements provided", () => {
      const validElements = testArrays.every(array =>
        array.every(element => startArray.includes(element))
      );
      expect(validElements).to.equal(true);
    });
  });
  describe("4 Elements", () => {
    const startArray = [1, 2, 3, 4];
    const testArrays = hall(4);
    // console.log(testArrays);
    it("checks an array of 4 elements outputs 24 permutations", () => {
      expect(testArrays.length).to.equal(24);
    });
    it("checks all 24 permutations are unique", () => {
      const uniqueTest = uniqWith(testArrays, isEqual).length;
      expect(uniqueTest).to.equal(24);
    });
    it("checks all permutations only contain one of every element", () => {
      const singularElements = testArrays.every(
        array => uniq(array).length === array.length
      );
      expect(singularElements).to.equal(true);
    });
    it("checks each permutation only uses valid elements provided", () => {
      const validElements = testArrays.every(array =>
        array.every(element => startArray.includes(element))
      );
      expect(validElements).to.equal(true);
    });
  });
  describe("3 Elements", () => {
    const startArray = [1, 2, 3];
    const testArrays = hall(3);
    // console.log(testArrays);
    it("checks an array of 3 elements outputs 6 permutations", () => {
      expect(testArrays.length).to.equal(6);
    });
    it("checks all 6 permutations are unique", () => {
      const uniqueTest = uniqWith(testArrays, isEqual).length;
      expect(uniqueTest).to.equal(6);
    });
    it("checks all permutations only contain one of every element", () => {
      const singularElements = testArrays.every(
        array => uniq(array).length === array.length
      );
      expect(singularElements).to.equal(true);
    });
    it("checks each permutation only uses valid elements provided", () => {
      const validElements = testArrays.every(array =>
        array.every(element => startArray.includes(element))
      );
      expect(validElements).to.equal(true);
    });
  });
});
