const { expect } = require('chai');

const {
  tompkins,
  lehmer,
  wells,
  shenShimratFischer,
  steinhausJohnsonTrotter,
  heap
} = require('../algorithms');
const { _ } = require('lodash');

let wellsRotation = 1;
[
  tompkins,
  lehmer,
  wells,
  wells,
  shenShimratFischer,
  steinhausJohnsonTrotter,
  heap
].forEach(permutationAlgorithm => {
  wellsRotation =
    permutationAlgorithm.name === wells.name && wellsRotation === 1 ? -1 : 1;
  const title =
    permutationAlgorithm.name === wells.name
      ? `${permutationAlgorithm.name} (${wellsRotation})`
      : `${permutationAlgorithm.name}`;
  describe(`${title}`, () => {
    const startArray = [1, 2, 3, 4, 5];
    const testArrays =
      permutationAlgorithm.name === wells.name
        ? permutationAlgorithm.algorithm(startArray)
        : permutationAlgorithm.algorithm(startArray, wellsRotation);

    it('checks the output has 120 permutations', () => {
      expect(testArrays.length).to.equal(120);
    });
    it('checks all the permutations are unique', () => {
      const uniqueTest = _.uniqWith(testArrays, _.isEqual).length;
      expect(uniqueTest).to.equal(120);
    });
    it('checks all permutations only contain one of every element', () => {
      const singularElements = testArrays.every(
        array => _.uniq(array).length === array.length
      );
      expect(singularElements).to.equal(true);
    });
    it('checks each permutation only uses valid elements provided', () => {
      const validElements = testArrays.every(array => {
        return array.every(element => startArray.includes(element));
      });
      expect(validElements).to.equal(true);
    });
  });
});
