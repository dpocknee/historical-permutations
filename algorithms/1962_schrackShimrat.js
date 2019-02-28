// 1962 Schrack-Shimrat Reverse Lexicographic Ordering

function schrackShimrat(numberArray) {
  function arrayReverse(array, position) {
    const reversed = [0].concat(array.slice(1, position + 1).reverse());
    const end = array.slice(position + 1);
    return reversed.concat(end);
  }

  function permulex(array, cb) {
    let p = array;
    const n = p.length;
    let i = 1;
    while (i < n) {
      i = 2;
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
      const first = p[i];
      const second = p[j];
      p[i] = second;
      p[j] = first;
      p = arrayReverse(p, i - 1);
      cb(p.slice(1));
    }
  }
  const outputArray = [numberArray];
  const callback = permutation => outputArray.push(permutation);
  permulex([0].concat(numberArray), callback);
  return outputArray;
}

module.exports = schrackShimrat;
