const { expect } = require('chai');
const { uniq, uniqWith, isEqual } = require('lodash');

const { tompkinsPaige, tompkinsRotate } = require('../algorithms/1956_tompkinsPaige');

describe('Tompkins-Paige Algorithm (1956)', () => {
  describe('Tompkins rotation function', () => {
    it('Correctly rotates tompkinsRotate([1,2,3,4,5], x, 1)', () => {
      expect(tompkinsRotate([1, 2, 3, 4, 5], 1, 1)).to.eql([1, 2, 3, 4, 5]);
      expect(tompkinsRotate([1, 2, 3, 4, 5], 2, 1)).to.eql([2, 1, 3, 4, 5]);
      expect(tompkinsRotate([1, 2, 3, 4, 5], 3, 1)).to.eql([2, 3, 1, 4, 5]);
      expect(tompkinsRotate([1, 2, 3, 4, 5], 4, 1)).to.eql([2, 3, 4, 1, 5]);
      expect(tompkinsRotate([1, 2, 3, 4, 5], 5, 1)).to.eql([2, 3, 4, 5, 1]);
    });
    it('Correctly rotates tompkinsRotate([1,2,3,4,5], x, -1)', () => {
      expect(tompkinsRotate([1, 2, 3, 4, 5], 1, -1)).to.eql([1, 2, 3, 4, 5]);
      expect(tompkinsRotate([1, 2, 3, 4, 5], 2, -1)).to.eql([2, 1, 3, 4, 5]);
      expect(tompkinsRotate([1, 2, 3, 4, 5], 3, -1)).to.eql([3, 1, 2, 4, 5]);
      expect(tompkinsRotate([1, 2, 3, 4, 5], 4, -1)).to.eql([4, 1, 2, 3, 5]);
      expect(tompkinsRotate([1, 2, 3, 4, 5], 5, -1)).to.eql([5, 1, 2, 3, 4]);
    });
    it('Correctly rotates tompkinsRotate([1,2,3,4,5], x, x-1)', () => {
      expect(tompkinsRotate([1, 2, 3, 4, 5], 3, 2)).to.eql([3, 1, 2, 4, 5]);
      expect(tompkinsRotate([1, 2, 3, 4, 5], 4, 3)).to.eql([4, 1, 2, 3, 5]);
      expect(tompkinsRotate([1, 2, 3, 4, 5], 5, 4)).to.eql([5, 1, 2, 3, 4]);
    });
  });

  describe('Rotation Direction = +1', () => {
    describe('5 Elements', () => {
      const startArray = [1, 2, 3, 4, 5];
      const testArrays = tompkinsPaige(startArray, 1);
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
      const testArrays = tompkinsPaige(startArray, 1);
      console.log(testArrays);
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
      const testArrays = tompkinsPaige(startArray, 1);
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
  describe('Rotation Direction = -1', () => {
    describe('5 Elements', () => {
      const startArray = [1, 2, 3, 4, 5];
      const testArrays = tompkinsPaige(startArray, -1);
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
      const testArrays = tompkinsPaige(startArray, -1);
      console.log(testArrays);
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
      const testArrays = tompkinsPaige(startArray, -1);
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
});
