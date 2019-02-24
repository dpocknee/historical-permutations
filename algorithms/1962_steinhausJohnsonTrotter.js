function steinhausJohnsonTrotter(arr) {
  const N = arr.length;
  const directions = [];
  const indices = [];

  directions.push(0);
  indices.push(0);
  for (let i = 1; i < N; i += 1) {
    directions.push(-1);
    indices.push(i);
  }

  function swap(i, j) {
    let tmp = indices[i];
    indices[i] = indices[j];
    indices[j] = tmp;

    tmp = directions[i];
    directions[i] = directions[j];
    directions[j] = tmp;
  }

  function result() {
    const res = [];
    for (let i = 0; i < N; i += 1) {
      res.push(arr[indices[i]]);
    }
    return res;
  }

  const makeResult = typeof arr !== 'string'
    ? result
    : function () {
      return result().join('');
    };

  return function () {
    let i; let maxIndex; let
      moveTo;
    for (i = 0; i < N; i += 1) {
      if (directions[i] !== 0) {
        maxIndex = i;
        break;
      }
    }
    if (maxIndex === undefined) {
      return undefined;
    }
    for (i = maxIndex + 1; i < N; i += 1) {
      if (directions[i] !== 0 && indices[i] > indices[maxIndex]) {
        maxIndex = i;
      }
    }
    moveTo = maxIndex + directions[maxIndex];
    swap(maxIndex, moveTo);
    if (
      moveTo === 0
      || moveTo === N - 1
      || indices[moveTo + directions[moveTo]] > indices[moveTo]
    ) {
      directions[moveTo] = 0;
    }
    for (i = 0; i < N; i += 1) {
      if (indices[i] > indices[moveTo]) {
        if (i < moveTo) {
          directions[i] = 1;
        } else {
          directions[i] = -1;
        }
      }
    }
    return makeResult();
  };
}

steinhausJohnsonTrotter.all = function (arr) {
  const generator = steinhausJohnsonTrotter(arr);
  let next = arr;
  const result = [];
  while (next !== undefined) {
    result.push(next);
    next = generator();
  }
  return result;
};

module.exports = {
  algorithm: steinhausJohnsonTrotter.all,
  code: '1962_steinhausJohnsonTrotter.js',
  name: 'Steinhaus-Johnson-Trotter/Bob? major?',
  year: 1962,
  info: 'This implementation is from https://github.com/nodash/steinhaus-johnson-trotter.  It is a A JavaScript implementation of the Steinhaus-Johnson-Trotter algorithm with Even\'s speedup to generate the permutations of a string or an array.',
  references: ['1963Steinhaus', '1963Johnson', '1962Trotter'],
};
