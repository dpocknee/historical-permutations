const { expect } = require("chai");
const {
  replace,
  rotate,
  rotateArrays,
  reverseArrays,
  swap,
  mutatedSwap,
  compareArrays
} = require("../utils/utils");

describe("UTILITIES", () => {
  describe("swap()", () => {
    beforeEach(() => (testArray = [1, 2, 3, 4, 5]));
    it("checks that elements 0 and 1 are being exchanged correctly ", () => {
      const actual = swap(testArray, 0, 1);
      const expected = [2, 1, 3, 4, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 0 and 2 are being exchanged correctly ", () => {
      const actual = swap(testArray, 0, 2);
      const expected = [3, 2, 1, 4, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 0 and 3 are being exchanged correctly ", () => {
      const actual = swap(testArray, 0, 3);
      const expected = [4, 2, 3, 1, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 0 and 4 are being exchanged correctly ", () => {
      const actual = swap(testArray, 0, 4);
      const expected = [5, 2, 3, 4, 1];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 1 and 2 are being exchanged correctly ", () => {
      const actual = swap(testArray, 1, 2);
      const expected = [1, 3, 2, 4, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 1 and 3 are being exchanged correctly ", () => {
      const actual = swap(testArray, 1, 3);
      const expected = [1, 4, 3, 2, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 1 and 4 are being exchanged correctly ", () => {
      const actual = swap(testArray, 1, 4);
      const expected = [1, 5, 3, 4, 2];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 2 and 3 are being exchanged correctly ", () => {
      const actual = swap(testArray, 2, 3);
      const expected = [1, 2, 4, 3, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 2 and 4 are being exchanged correctly ", () => {
      const actual = swap(testArray, 2, 4);
      const expected = [1, 2, 5, 4, 3];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 3 and 4 are being exchanged correctly ", () => {
      const actual = swap(testArray, 3, 4);
      const expected = [1, 2, 3, 5, 4];
      expect(actual).to.eql(expected);
    });
    it("checks that output array is not the same as input array.", () => {
      const actual = swap(testArray, 3, 4);
      expect(actual).to.not.equal(testArray);
    });
  });

  describe("mutatedSwap()", () => {
    beforeEach(() => (testArray = [1, 2, 3, 4, 5]));
    it("checks that elements 0 and 1 are being exchanged correctly ", () => {
      const actual = mutatedSwap(testArray, 0, 1);
      const expected = [2, 1, 3, 4, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 0 and 2 are being exchanged correctly ", () => {
      const actual = mutatedSwap(testArray, 0, 2);
      const expected = [3, 2, 1, 4, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 0 and 3 are being exchanged correctly ", () => {
      const actual = mutatedSwap(testArray, 0, 3);
      const expected = [4, 2, 3, 1, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 0 and 4 are being exchanged correctly ", () => {
      const actual = mutatedSwap(testArray, 0, 4);
      const expected = [5, 2, 3, 4, 1];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 1 and 2 are being exchanged correctly ", () => {
      const actual = mutatedSwap(testArray, 1, 2);
      const expected = [1, 3, 2, 4, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 1 and 3 are being exchanged correctly ", () => {
      const actual = mutatedSwap(testArray, 1, 3);
      const expected = [1, 4, 3, 2, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 1 and 4 are being exchanged correctly ", () => {
      const actual = mutatedSwap(testArray, 1, 4);
      const expected = [1, 5, 3, 4, 2];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 2 and 3 are being exchanged correctly ", () => {
      const actual = mutatedSwap(testArray, 2, 3);
      const expected = [1, 2, 4, 3, 5];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 2 and 4 are being exchanged correctly ", () => {
      const actual = mutatedSwap(testArray, 2, 4);
      const expected = [1, 2, 5, 4, 3];
      expect(actual).to.eql(expected);
    });
    it("checks that elements 3 and 4 are being exchanged correctly ", () => {
      const actual = mutatedSwap(testArray, 3, 4);
      const expected = [1, 2, 3, 5, 4];
      expect(actual).to.eql(expected);
    });
    it("checks that output array is the same as input array.", () => {
      const actual = mutatedSwap(testArray, 3, 4);
      expect(actual).to.equal(testArray);
    });
  });

  describe("replace()", () => {
    const array = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ];
    it("checks a small array of arrays has all content substituted and outputs input and output", () => {
      const expected = [
        [[1, 2, 3], ["a", "b", "c"]],
        [[1, 3, 2], ["a", "c", "b"]],
        [[2, 1, 3], ["b", "a", "c"]],
        [[2, 3, 1], ["b", "c", "a"]],
        [[3, 1, 2], ["c", "a", "b"]],
        [[3, 2, 1], ["c", "b", "a"]]
      ];
      expect(replace(array, [1, 2, 3], ["a", "b", "c"], 1)).to.eql(expected);
    });
    it("checks a small array of arrays has all content substituted and outputs ONLY output", () => {
      const expected = [
        ["a", "b", "c"],
        ["a", "c", "b"],
        ["b", "a", "c"],
        ["b", "c", "a"],
        ["c", "a", "b"],
        ["c", "b", "a"]
      ];
      expect(replace(array, [1, 2, 3], ["a", "b", "c"], 0)).to.eql(expected);
    });
    it("checks a small array of arrays has all content substituted and outputs input and output but in separate arrays", () => {
      const expected = [
        [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]],
        [
          ["a", "b", "c"],
          ["a", "c", "b"],
          ["b", "a", "c"],
          ["b", "c", "a"],
          ["c", "a", "b"],
          ["c", "b", "a"]
        ]
      ];
      expect(replace(array, [1, 2, 3], ["a", "b", "c"]), 2).to.eql(expected);
    });
    it("checks function does not mutate array", () => {
      const testArray = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
      ];
      expect(testArray).to.not.equal(
        replace(testArray, [1, 2, 3], ["a", "b", "c"], 0)
      );
    });
    it("checks function does not change original array.", () => {
      const originalArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      const testArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      replace(testArray, [1, 2, 3], ["a", "b", "c"], 0);
      expect(originalArray).to.deep.eql(testArray);
    });
  });
  describe("rotate()", () => {
    describe("checks that array was correctly rotated by 0.", () => {
      it("checks an array length of 1", () => {
        expect(rotate([1], 0)).to.eql([1]);
      });
      it("checks an array length of 2", () => {
        expect(rotate([1, 2], 0)).to.eql([1, 2]);
      });
      it("checks an array length of 3", () => {
        expect(rotate([1, 2, 3], 0)).to.eql([1, 2, 3]);
      });
      it("checks an array length of 4", () => {
        expect(rotate([1, 2, 3, 4], 0)).to.eql([1, 2, 3, 4]);
      });
      it("checks an array length of 5", () => {
        expect(rotate([1, 2, 3, 4, 5], 0)).to.eql([1, 2, 3, 4, 5]);
      });
    });
    describe("checks that array was correctly rotated by 1.", () => {
      it("checks an array length of 1", () => {
        expect(rotate([1], 1)).to.eql([1]);
      });
      it("checks an array length of 2", () => {
        expect(rotate([1, 2], 1)).to.eql([2, 1]);
      });
      it("checks an array length of 3", () => {
        expect(rotate([1, 2, 3], 1)).to.eql([2, 3, 1]);
      });
      it("checks an array length of 4", () => {
        expect(rotate([1, 2, 3, 4], 1)).to.eql([2, 3, 4, 1]);
      });
      it("checks an array length of 5", () => {
        expect(rotate([1, 2, 3, 4, 5], 1)).to.eql([2, 3, 4, 5, 1]);
      });
    });
    describe("checks that array was correctly rotated by -1.", () => {
      it("checks an array length of 1", () => {
        expect(rotate([1], -1)).to.eql([1]);
      });
      it("checks an array length of 2", () => {
        expect(rotate([1, 2], -1)).to.eql([2, 1]);
      });
      it("checks an array length of 3", () => {
        expect(rotate([1, 2, 3], -1)).to.eql([3, 1, 2]);
      });
      it("checks an array length of 4", () => {
        expect(rotate([1, 2, 3, 4], -1)).to.eql([4, 1, 2, 3]);
      });
      it("checks an array length of 5", () => {
        expect(rotate([1, 2, 3, 4, 5], -1)).to.eql([5, 1, 2, 3, 4]);
      });
    });
    describe("checks that array was correctly rotated by 2.", () => {
      it("checks an array length of 1", () => {
        expect(rotate([1], 2)).to.eql([1]);
      });
      it("checks an array length of 2", () => {
        expect(rotate([1, 2], 2)).to.eql([1, 2]);
      });
      it("checks an array length of 3", () => {
        expect(rotate([1, 2, 3], 2)).to.eql([3, 1, 2]);
      });
      it("checks an array length of 4", () => {
        expect(rotate([1, 2, 3, 4], 2)).to.eql([3, 4, 1, 2]);
      });
      it("checks an array length of 5", () => {
        expect(rotate([1, 2, 3, 4, 5], 2)).to.eql([3, 4, 5, 1, 2]);
      });
    });
    describe("checks that array was correctly rotated by -2.", () => {
      it("checks an array length of 1", () => {
        expect(rotate([1], -2)).to.eql([1]);
      });
      it("checks an array length of 2", () => {
        expect(rotate([1, 2], -2)).to.eql([1, 2]);
      });
      it("checks an array length of 3", () => {
        expect(rotate([1, 2, 3], -2)).to.eql([2, 3, 1]);
      });
      it("checks an array length of 4", () => {
        expect(rotate([1, 2, 3, 4], -2)).to.eql([3, 4, 1, 2]);
      });
      it("checks an array length of 5", () => {
        expect(rotate([1, 2, 3, 4, 5], -2)).to.eql([4, 5, 1, 2, 3]);
      });
    });
  });
  describe("rotateArrays()", () => {
    const testArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
    it("checks all arrays in an array are rotated by 0", () => {
      const actual = rotateArrays(testArray, 0);
      expect(actual).to.deep.eql(testArray);
    });
    it("checks all arrays in an array are rotated by +1", () => {
      const expected = [[2, 3, 1], [3, 2, 1], [1, 3, 2]];
      const actual = rotateArrays(testArray, 1);
      expect(actual).to.deep.eql(expected);
    });
    it("checks all arrays in an array are rotated by +2", () => {
      const expected = [[3, 1, 2], [2, 1, 3], [3, 2, 1]];
      const actual = rotateArrays(testArray, 2);
      expect(actual).to.deep.eql(expected);
    });
    it("checks all arrays in an array are rotated by +3", () => {
      const expected = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      const actual = rotateArrays(testArray, 3);
      expect(actual).to.deep.eql(expected);
    });
    it("checks all arrays in an array are rotated by +4", () => {
      const expected = [[2, 3, 1], [3, 2, 1], [1, 3, 2]];
      const actual = rotateArrays(testArray, 4);
      expect(actual).to.deep.eql(expected);
    });
    it("checks all arrays in an array are rotated by -1", () => {
      const expected = [[3, 1, 2], [2, 1, 3], [3, 2, 1]];
      const actual = rotateArrays(testArray, -1);
      expect(actual).to.deep.eql(expected);
    });
    it("checks all arrays in an array are rotated by -2", () => {
      const expected = [[2, 3, 1], [3, 2, 1], [1, 3, 2]];
      const actual = rotateArrays(testArray, -2);
      expect(actual).to.deep.eql(expected);
    });
    it("checks function does not mutate array", () => {
      const mutateTestArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      expect(mutateTestArray).to.not.equal(rotateArrays(mutateTestArray, 2));
    });
    it("checks function does not change original array.", () => {
      const originalArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      const mutateTestArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      rotateArrays(mutateTestArray, 2);
      expect(originalArray).to.deep.eql(mutateTestArray);
    });
  });
  describe("reverseArrays()", () => {
    it("checks all arrays are reversed", () => {
      const testArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      const actual = reverseArrays(testArray);
      const expected = [[3, 2, 1], [2, 3, 1], [3, 1, 2]];
      expect(actual).to.deep.eql(expected);
    });
    it("checks function does not mutate array", () => {
      const testArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      expect(testArray).to.not.equal(reverseArrays(testArray));
    });
    it("checks function does not change original array.", () => {
      const originalArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      const testArray = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      reverseArrays(testArray);
      expect(originalArray).to.deep.eql(testArray);
    });
  });
  describe("compareArrays()", () => {
    it("checks two identical arrays of length 3", () => {
      const array1 = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      const array2 = [["A", "B", "C"], ["A", "C", "B"], ["B", "A", "C"]];
      expect(compareArrays(array1, array2)).to.equal(true);
    });
    it("checks two non-identical arrays of length 3", () => {
      const array1 = [[1, 2, 3], [1, 3, 2], [2, 1, 3]];
      const array2 = [["A", "B", "C"], ["A", "C", "C"], ["B", "A", "C"]];
      expect(compareArrays(array1, array2)).to.equal(false);
    });
  });
});
