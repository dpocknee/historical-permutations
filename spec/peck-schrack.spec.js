const { expect } = require('chai');
const { uniq, uniqWith, isEqual } = require('lodash');

const peckSchrack = require('../algorithms/1962_peck-schrack');

describe('Peck-Schrack (1962)', () => {
  describe('5 Elements', () => {
    const startArray = [1, 2, 3, 4, 5];
    const testArrays = peckSchrack(5);
    // console.log(testArrays);
    it('checks an array of 5 elements outputs 120 permutations', () => {
      expect(testArrays.length).to.equal(120);
    });
    it('checks all 120 permutations are unique', () => {
      const uniqueTest = uniqWith(testArrays, isEqual).length;
      expect(uniqueTest).to.equal(120);
    });
    it('checks all permutations only contain one of every element', () => {
      const singularElements = testArrays.every(array => uniq(array).length === array.length);
      expect(singularElements).to.equal(true);
    });
    it('checks each permutation only uses valid elements provided', () => {
      const validElements = testArrays.every(array => array.every(element => startArray.includes(element)));
      expect(validElements).to.equal(true);
    });
  });
  describe('4 Elements', () => {
    const startArray = [1, 2, 3, 4];
    const testArrays = peckSchrack(4);
    // console.log(testArrays);
    it('checks an array of 4 elements outputs 24 permutations', () => {
      expect(testArrays.length).to.equal(24);
    });
    it('checks all 24 permutations are unique', () => {
      const uniqueTest = uniqWith(testArrays, isEqual).length;
      expect(uniqueTest).to.equal(24);
    });
    it('checks all permutations only contain one of every element', () => {
      const singularElements = testArrays.every(array => uniq(array).length === array.length);
      expect(singularElements).to.equal(true);
    });
    it('checks each permutation only uses valid elements provided', () => {
      const validElements = testArrays.every(array => array.every(element => startArray.includes(element)));
      expect(validElements).to.equal(true);
    });
  });
  describe('3 Elements', () => {
    const startArray = [1, 2, 3];
    const testArrays = peckSchrack(3);
    // console.log(testArrays);
    it('checks an array of 3 elements outputs 6 permutations', () => {
      expect(testArrays.length).to.equal(6);
    });
    it('checks all 6 permutations are unique', () => {
      const uniqueTest = uniqWith(testArrays, isEqual).length;
      expect(uniqueTest).to.equal(6);
    });
    it('checks all permutations only contain one of every element', () => {
      const singularElements = testArrays.every(array => uniq(array).length === array.length);
      expect(singularElements).to.equal(true);
    });
    it('checks each permutation only uses valid elements provided', () => {
      const validElements = testArrays.every(array => array.every(element => startArray.includes(element)));
      expect(validElements).to.equal(true);
    });
  });
});
