// const { uniq } = require('lodash');
const superpermutation = require('../work-in-progress/2019_superpermutation');
const { expect } = require('chai');
const { hall } = require('../algorithms/1960_hall');

describe.only('Superpermutation (2019)', () => {
  describe('n = 4', () => {
    const permLength = 4;
    const superperm = superpermutation(permLength);
    console.log('superperm', superperm);
    const allPossiblePermutations = hall(permLength);
    const testArray = [];
    for (let i = 0; i <= superperm.length - permLength; i++) {
      testArray.push(superperm.slice(i, i + permLength));
    }
    console.log(testArray);
    for (let i = 0; i < allPossiblePermutations.length; i++) {
      it(`checks that permutation ${allPossiblePermutations[i]} is present`, () => {
        expect(testArray).to.deep.include(allPossiblePermutations[i]);
      });
    }
  });
  // describe('n = 5', () => {
  //   const permLength = 5;
  //   const superperm = superpermutation(permLength);
  //   const allPossiblePermutations = hall(permLength);
  //   const testArray = [];
  //   for (let i = 0; i <= superperm.length - permLength; i++) {
  //     testArray.push(superperm.slice(i, i + permLength));
  //   }
  //   it('checks that all permutations are present', () => allPossiblePermutations.every(array => expect(testArray).to.deep.include(array)));
  // });
});

// console.log(testArray);
