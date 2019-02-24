function shenShimratFischerWrapper(numberArray) {
  function fischerReverse(array, position) {
    const reversed = [0].concat(array.slice(1, position + 1).reverse());
    const end = array.slice(position + 1);
    return reversed.concat(end);
  }

  function fischerkrause(array, cb) {
    let p = array;
    const n = p.length;
    const i = 1;
    while (i < n) {
      let i = 2;
      while (p[i] < p[i - 1]) {
        i += 1;
      }
      if (i >= n) {
        break;
      }
      let j = 1;
      while (p[j] > p[i]) {
        j += 1;
      }
      // swap p[i] and p[j]
      const first = p[i];
      const second = p[j];
      p[i] = second;
      p[j] = first;
      p = fischerReverse(p, i - 1);
      cb(p.slice(1));
    }
  }
  // This generates the Fischer-Krause reverse lexicographic ordering
  const fischerArray = [numberArray];
  const callback = permutation => fischerArray.push(permutation);
  fischerkrause([0].concat(numberArray), callback);
  return fischerArray;
}

module.exports = {
  algorithm: shenShimratFischerWrapper,
  code: '1962_shenShimratFischer.js',
  year: 1962,
  name: 'Reverse Lexicographic Order',
  info: 'Generates reverse lexicographic order using the Fischer-Krause algorithm, as implemented by Shen and Shimrat (1962), as described in Robert Sedgewick\'s 1977 "Permutation Generation Methods" paper.  NOTE: Because of the fact the original algorithm is based on an array in which the indexes start from 1 rather than 0, the input array should have a meaningless placeholder element in the first position (e.g. the \'0\' in [0,1,2,3,4,5]).',
  references: ['1962SchackShimrat', '1962Shen', '1963Shen'],
};
