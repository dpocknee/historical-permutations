const { tompkinsPaige } = require("./algorithms/1956_tompkins-paige");
const lehmer = require("./algorithms/1960_lehmer");
const wells = require("./algorithms/1961_wells");
const schrackShimrat = require("./algorithms/1962_schrack-shimrat");
const heap = require("./algorithms/1963_heap");
const { hall } = require("./algorithms/1960_hall");
const coveyouSullivan = require("./algorithms/1961_coveyou-sullivan");
const myrvoldRuskey = require("./algorithms/2001_myrvold-ruskey");
const peckSchrack = require("./algorithms/1962_peck-schrack");
const superpermutation = require("./algorithms/2019_superpermutation");

const {
  replace,
  rotate,
  rotateArrays,
  reverseNonMutate,
  reverseArrays,
  swap,
  mutatedSwap
} = require("./utils/utils");

module.exports = {
  tompkinsPaige,
  lehmer,
  wells,
  schrackShimrat,
  heap,
  hall,
  coveyouSullivan,
  myrvoldRuskey,
  peckSchrack,
  superpermutation,
  replace,
  rotate,
  rotateArrays,
  reverseArrays,
  swap,
  mutatedSwap,
  reverseNonMutate
};
