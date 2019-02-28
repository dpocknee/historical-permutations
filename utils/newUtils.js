function rotate(array, rotation) {
  const rotateSplit = rotation < 0 ? (rotation - 1) % array.length : (rotation - 1) % array.length;
  return array.slice(rotateSplit).concat(array.slice(0, rotateSplit));
}

module.exports = { rotate };
