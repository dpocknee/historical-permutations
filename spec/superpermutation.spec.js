// const { uniq } = require('lodash');
const superpermutation = require("../algorithms/2019_superpermutation");
const { expect } = require("chai");
const { hall } = require("../algorithms/1960_hall");

const detailedBreakdown = false;

describe("Superpermutation (2019)", () => {
  describe("n = 3", () => {
    const permLength = 3;
    const superperm = superpermutation(permLength);
    const allPossiblePermutations = hall(permLength);
    const splitSuperperm = [];
    for (let i = 0; i <= superperm.length - permLength; i++) {
      splitSuperperm.push(superperm.slice(i, i + permLength));
    }
    describe(`Superpermutation length: ${superperm.length}`, () => {
      if (detailedBreakdown) {
        for (let i = 0; i < allPossiblePermutations.length; i++) {
          it(`checks that permutation ${
            allPossiblePermutations[i]
          } is present`, () => {
            expect(splitSuperperm).to.deep.include(allPossiblePermutations[i]);
          });
        }
      } else {
        const checking = allPossiblePermutations.every(
          (singlePermutation, index) => {
            return expect(splitSuperperm).to.deep.include(singlePermutation);
          }
        );
        it(`checks that permutation all permutations are present.`, () => {
          expect(checking).to.equal(true);
        });
      }
    });
  });
  describe("n = 4", () => {
    const permLength = 4;
    const superperm = superpermutation(permLength);
    const allPossiblePermutations = hall(permLength);
    const splitSuperperm = [];
    for (let i = 0; i <= superperm.length - permLength; i++) {
      splitSuperperm.push(superperm.slice(i, i + permLength));
    }
    describe(`Superpermutation length: ${superperm.length}`, () => {
      if (detailedBreakdown) {
        for (let i = 0; i < allPossiblePermutations.length; i++) {
          it(`checks that permutation ${
            allPossiblePermutations[i]
          } is present`, () => {
            expect(splitSuperperm).to.deep.include(allPossiblePermutations[i]);
          });
        }
      } else {
        const checking = allPossiblePermutations.every(
          (singlePermutation, index) => {
            return expect(splitSuperperm).to.deep.include(singlePermutation);
          }
        );
        it(`checks that permutation all permutations are present.`, () => {
          expect(checking).to.equal(true);
        });
      }
    });
  });
  describe("n = 5", () => {
    const permLength = 5;
    const superperm = superpermutation(permLength);
    const allPossiblePermutations = hall(permLength);
    const splitSuperperm = [];
    for (let i = 0; i <= superperm.length - permLength; i++) {
      splitSuperperm.push(superperm.slice(i, i + permLength));
    }
    describe(`Superpermutation length: ${superperm.length}`, () => {
      if (detailedBreakdown) {
        for (let i = 0; i < allPossiblePermutations.length; i++) {
          it(`checks that permutation ${
            allPossiblePermutations[i]
          } is present`, () => {
            expect(splitSuperperm).to.deep.include(allPossiblePermutations[i]);
          });
        }
      } else {
        const checking = allPossiblePermutations.every(
          (singlePermutation, index) => {
            return expect(splitSuperperm).to.deep.include(singlePermutation);
          }
        );
        it(`checks that permutation all permutations are present.`, () => {
          expect(checking).to.equal(true);
        });
      }
    });
  });
  describe("n = 6", () => {
    const permLength = 6;
    const superperm = superpermutation(permLength);
    const allPossiblePermutations = hall(permLength);
    const splitSuperperm = [];
    for (let i = 0; i <= superperm.length - permLength; i++) {
      splitSuperperm.push(superperm.slice(i, i + permLength));
    }
    describe(`Superpermutation length: ${superperm.length}`, () => {
      if (detailedBreakdown) {
        for (let i = 0; i < allPossiblePermutations.length; i++) {
          it(`checks that permutation ${
            allPossiblePermutations[i]
          } is present`, () => {
            expect(splitSuperperm).to.deep.include(allPossiblePermutations[i]);
          });
        }
      } else {
        const checking = allPossiblePermutations.every(
          (singlePermutation, index) => {
            return expect(splitSuperperm).to.deep.include(singlePermutation);
          }
        );
        it(`checks that permutation all permutations are present.`, () => {
          expect(checking).to.equal(true);
        });
      }
    });
  });
  describe("n = 7", () => {
    const permLength = 7;
    const superperm = superpermutation(permLength);
    const allPossiblePermutations = hall(permLength);
    const splitSuperperm = [];
    for (let i = 0; i <= superperm.length - permLength; i++) {
      splitSuperperm.push(superperm.slice(i, i + permLength));
    }
    describe(`Superpermutation length: ${superperm.length}`, () => {
      if (detailedBreakdown) {
        for (let i = 0; i < allPossiblePermutations.length; i++) {
          it(`checks that permutation ${
            allPossiblePermutations[i]
          } is present`, () => {
            expect(splitSuperperm).to.deep.include(allPossiblePermutations[i]);
          });
        }
      } else {
        const checking = allPossiblePermutations.every(
          (singlePermutation, index) => {
            return expect(splitSuperperm).to.deep.include(singlePermutation);
          }
        );
        it(`checks that permutation all permutations are present.`, () => {
          expect(checking).to.equal(true);
        });
      }
    });
  });
});
