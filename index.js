const { tompkinsPaige } = require("./algorithms/1956_tompkins-paige");
const lehmer = require("./algorithms/1960_lehmer");
const wells = require("./algorithms/1961_wells");
const schrackShimrat = require("./algorithms/1962_schrack-shimrat");
const ordSmith = require("./algorithms/1967_ord-smith");
const ordSmithRevLex = require("./algorithms/1968_ord-smith-rev-lex");
const steinhausJohnsonTrotter = require("./algorithms/1962_steinhaus-johnson-trotter");
const heap = require("./algorithms/1963_heap");
const { hall } = require("./algorithms/1960_hall");
const { gysinSommerville } = require("./algorithms/1960_gysinSommerville");
const coveyouSullivan = require("./algorithms/1961_coveyou-sullivan");
const langdon = require("./algorithms/1967_langdon");
const myrvoldRuskey = require("./algorithms/2001_myrvold-ruskey");
const peckSchrack = require("./algorithms/1962_peck-schrack");
const superpermutation = require("./algorithms/2019_superpermutation");
const pandita = require("./algorithms/1500_pandita");

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
  steinhausJohnsonTrotter,
  pandita,
  heap,
  hall,
  gysinSommerville,
  coveyouSullivan,
  langdon,
  myrvoldRuskey,
  peckSchrack,
  ordSmith,
  ordSmithRevLex,
  superpermutation,
  replace,
  rotate,
  rotateArrays,
  reverseArrays,
  swap,
  mutatedSwap,
  reverseNonMutate
};
