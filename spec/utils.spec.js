const { expect } = require('chai');
// const { swapper } = require('../algorithms/algorithms-general');
const { substituteContent, swapper } = require('../utils/utils');

describe('swapper()', () => {
  beforeEach(() => {
    return (testArray = [1, 2, 3, 4, 5]);
  });
  it('checks that elements 0 and 1 are being exchanged correctly ', () => {
    const actual = swapper(testArray, 0, 1);
    const expected = [2, 1, 3, 4, 5];
    expect(actual).to.eql(expected);
  });
  it('checks that elements 0 and 2 are being exchanged correctly ', () => {
    const actual = swapper(testArray, 0, 2);
    const expected = [3, 2, 1, 4, 5];
    expect(actual).to.eql(expected);
  });
  it('checks that elements 0 and 3 are being exchanged correctly ', () => {
    const actual = swapper(testArray, 0, 3);
    const expected = [4, 2, 3, 1, 5];
    expect(actual).to.eql(expected);
  });
  it('checks that elements 0 and 4 are being exchanged correctly ', () => {
    const actual = swapper(testArray, 0, 4);
    const expected = [5, 2, 3, 4, 1];
    expect(actual).to.eql(expected);
  });
  it('checks that elements 1 and 2 are being exchanged correctly ', () => {
    const actual = swapper(testArray, 1, 2);
    const expected = [1, 3, 2, 4, 5];
    expect(actual).to.eql(expected);
  });
  it('checks that elements 1 and 3 are being exchanged correctly ', () => {
    const actual = swapper(testArray, 1, 3);
    const expected = [1, 4, 3, 2, 5];
    expect(actual).to.eql(expected);
  });
  it('checks that elements 1 and 4 are being exchanged correctly ', () => {
    const actual = swapper(testArray, 1, 4);
    const expected = [1, 5, 3, 4, 2];
    expect(actual).to.eql(expected);
  });
  it('checks that elements 2 and 3 are being exchanged correctly ', () => {
    const actual = swapper(testArray, 2, 3);
    const expected = [1, 2, 4, 3, 5];
    expect(actual).to.eql(expected);
  });
  it('checks that elements 2 and 4 are being exchanged correctly ', () => {
    const actual = swapper(testArray, 2, 4);
    const expected = [1, 2, 5, 4, 3];
    expect(actual).to.eql(expected);
  });
  it('checks that elements 3 and 4 are being exchanged correctly ', () => {
    const actual = swapper(testArray, 3, 4);
    const expected = [1, 2, 3, 5, 4];
    expect(actual).to.eql(expected);
  });
});

describe('substituteContent()', () => {
  it('checks a small array of arrays has all content substituted', () => {
    const array = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ];
    const expected = [
      [[1, 2, 3], ['a', 'b', 'c']],
      [[1, 3, 2], ['a', 'c', 'b']],
      [[2, 1, 3], ['b', 'a', 'c']],
      [[2, 3, 1], ['b', 'c', 'a']],
      [[3, 1, 2], ['c', 'a', 'b']],
      [[3, 2, 1], ['c', 'b', 'a']]
    ];
    expect(substituteContent(array, [1, 2, 3], ['a', 'b', 'c'])).to.eql(
      expected
    );
  });
});
