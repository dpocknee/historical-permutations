const { expect } = require("chai");
const { uniq, uniqWith, isEqual } = require("lodash");

const {
  sommervilleRotater,
  gysinSommerville
} = require("../1960_gysinSommerville");

describe("Gysin-Sommerville (1960)", () => {
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

  describe("Gysin-Sommerville #1 [gysinSommerville(x, 1, y)] (1960)", () => {
    describe("1 setting", () => {
      describe("5 Elements", () => {
        const startArray = [1, 2, 3, 4, 5];
        const testArrays = gysinSommerville(5, 1, 1);
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
        const testArrays = gysinSommerville(4, 1, 1);
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
        const testArrays = gysinSommerville(3, 1, 1);
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
    describe("-1 setting", () => {
      describe("5 Elements", () => {
        const startArray = [1, 2, 3, 4, 5];
        const testArrays = gysinSommerville(5, 1, -1);
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
        const testArrays = gysinSommerville(4, 1, -1);
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
        const testArrays = gysinSommerville(3, 1, -1);
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
    describe("Gysin-Sommerville #2 [gysinSommerville(x, 2, y)] (1960)", () => {
      describe("1 setting", () => {
        describe("5 Elements", () => {
          const startArray = [1, 2, 3, 4, 5];
          const testArrays = gysinSommerville(5, 2, 1);
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
          const testArrays = gysinSommerville(4, 2, 1);
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
          const testArrays = gysinSommerville(3, 2, 1);
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
      describe("-1 setting", () => {
        describe("5 Elements", () => {
          const startArray = [1, 2, 3, 4, 5];
          const testArrays = gysinSommerville(5, 2, -1);
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
          const testArrays = gysinSommerville(4, 2, -1);
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
          const testArrays = gysinSommerville(3, 2, -1);
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
    });
    describe("Gysin-Sommerville #3 [gysinSommerville(x, 3, y)] (1960)", () => {
      describe("1 setting", () => {
        describe("5 Elements", () => {
          const startArray = [1, 2, 3, 4, 5];
          const testArrays = gysinSommerville(5, 3, 1);
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
          const testArrays = gysinSommerville(4, 3, 1);
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
          const testArrays = gysinSommerville(3, 3, 1);
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
      describe("-1 setting", () => {
        describe("5 Elements", () => {
          const startArray = [1, 2, 3, 4, 5];
          const testArrays = gysinSommerville(5, 3, -1);
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
          const testArrays = gysinSommerville(4, 3, -1);
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
          const testArrays = gysinSommerville(3, 3, -1);
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
    });
    describe("Gysin-Sommerville #4 [gysinSommerville(x, 4, y)] (1960)", () => {
      describe("1 setting", () => {
        describe("5 Elements", () => {
          const startArray = [1, 2, 3, 4, 5];
          const testArrays = gysinSommerville(5, 4, 1);
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
          const testArrays = gysinSommerville(4, 4, 1);
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
          const testArrays = gysinSommerville(3, 4, 1);
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
      describe("-1 setting", () => {
        describe("5 Elements", () => {
          const startArray = [1, 2, 3, 4, 5];
          const testArrays = gysinSommerville(5, 4, -1);
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
          const testArrays = gysinSommerville(4, 4, -1);
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
          const testArrays = gysinSommerville(3, 4, -1);
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
    });
  });
});
