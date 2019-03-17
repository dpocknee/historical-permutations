const { rotate } = require('../utils/utils');

function createClosePerms(startingPerm, loopNo, totalLoops) {
  const miniPerms = startingPerm.reduce(
    (outputArray, element, index) => (index !== startingPerm.length - 1 ? [...outputArray, element] : outputArray),
    startingPerm
  );
  const arrayCut = miniPerms.length - startingPerm.length;

  let outputPerms = [];
  if (loopNo !== 0) outputPerms = miniPerms.slice(startingPerm.length);
  else outputPerms = miniPerms.map(x => x);
  return [outputPerms, miniPerms.slice(arrayCut)];
}

function bShape(startingPerm, loopNo, totalLoops) {
  const newElements = rotate(startingPerm.slice(0, 2), 2);
  const lastElements = startingPerm.slice(2);
  const reversed = startingPerm.reverse();
  return loopNo !== Math.round(totalLoops / 2) - 1
    ? [[...lastElements, ...newElements], newElements]
    : [[...reversed], reversed.slice(1)];
}

function bShape2(startingPerm, loopNo, n, totalLoops) {
  const newElements = rotate(startingPerm.slice(0, 2), 2);
  const lastElements = startingPerm.slice(2);
  const reversed = startingPerm.reverse();
  console.log('loop mod:', loopNo % (n - 1) === 0 && loopNo !== 0);
  if (loopNo % (n - 1) === n - 1) {
    return loopNo !== 0
      ? [[...reversed], reversed.slice(1)]
      : [[...lastElements, ...newElements], newElements];
  }
  return [[...lastElements, ...newElements], newElements];
}

function superpermutation(n) {
  const startingArray = Array.from({ length: n }, (value, index) => index + 1);
  const outputArray = [];
  let currentArray = startingArray;
  const factorial = startingArray.reduce((total, number, index) => number * total, 1);
  const totalLoops = factorial / n;
  for (let i = 0; i < totalLoops; i++) {
    const newPerms = createClosePerms(currentArray, i, totalLoops);
    newPerms[0].forEach((newValue) => {
      outputArray.push(newValue);
    });
    const navigationPerms = bShape(newPerms[1], i, totalLoops);
    // const navigationPerms = bShape2(newPerms[1], i, n, totalLoops);
    console.log('newPerms: ', newPerms, 'navigationPerms: ', navigationPerms);
    navigationPerms[1].forEach((newValue) => {
      if (i < totalLoops - 1) outputArray.push(newValue);
    });
    console.log('outputArray', outputArray.join(' '));
    currentArray = navigationPerms[0];
  }
  console.log('Length of superpermutation: ', outputArray.length);
  return outputArray;
}

// superpermutation(4);
// superpermutation(5);
module.exports = superpermutation;
