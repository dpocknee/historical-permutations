const { rotate } = require('../utils/utils');

function createClosePerms(startingPerm, loopNo, totalLoops) {
  const miniPerms = startingPerm.reduce(
    (outputArray, element, index) => (index !== startingPerm.length - 1 ? [...outputArray, element] : outputArray),
    startingPerm
  );
  const arrayCut = miniPerms.length - startingPerm.length;

  const miniAdjusted = loopNo === Math.round(totalLoops / 2) - 1
    ? [...miniPerms.slice(0, -2), ...rotate(miniPerms.slice(-2), 2)]
    : miniPerms.map(x => x);
  let outputPerms = [];
  if (loopNo !== 0) outputPerms = miniAdjusted.slice(startingPerm.length);
  else outputPerms = miniAdjusted.map(x => x);
  return [outputPerms, miniAdjusted.slice(arrayCut)];
}

function bShape(startingPerm) {
  const newElements = rotate(startingPerm.slice(0, 2), 2);
  const lastElements = startingPerm.slice(2);
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
    const navigationPerms = bShape(newPerms[1]);
    console.log('newPerms: ', newPerms, 'navigationPerms: ', navigationPerms);
    navigationPerms[1].forEach((newValue) => {
      outputArray.push(newValue);
    });
    console.log('outputArray', outputArray.join(' '));
    currentArray = navigationPerms[0];
  }
  console.log('Length of superpermutation: ', outputArray.length);
  return outputArray;
}

superpermutation(4);
// module.exports = superpermutation;
