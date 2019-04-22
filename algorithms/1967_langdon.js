const { rotate } = require("../utils/utils");

function langdonRotate(array, i) {
  const p = array.map(x => x);
  const startRotate = rotate(p.slice(0, i), 1);
  const endRotate = p.slice(i);
  return [...startRotate, ...endRotate];
}

function langdonCode(n, cb) {
  let p = Array.from({ length: n + 1 }, (v, i) => i);
  cb(p);
  let i = n;
  while (i >= 1) {
    const rotateSection = p.slice(1);
    p = [0, ...langdonRotate(rotateSection, i)];
    if (p[i] === i) i -= 1;
    else i = n;
    if (!p.every((element, index) => element === index) && i === n) {
      cb(p);
    }
    if (i <= 1) break;
  }
}

function langdon(n) {
  const langdonArray = [];
  langdonCode(n, permutation => langdonArray.push(permutation.slice(1)));
  return langdonArray;
}

module.exports = langdon;
