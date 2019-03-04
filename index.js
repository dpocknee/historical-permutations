const { tompkinsPaige } = require('./algorithms/1956_tompkins-paige');
const lehmer = require('./algorithms/1960_lehmer');
const wells = require('./algorithms/1961_wells');
const schrackShimrat = require('./algorithms/1962_schrack-shimrat');
const heap = require('./algorithms/1963_heap');
const { hall } = require('./algorithms/1960_hall');
const { substituteContent } = require('./utils/utils');

module.exports = {
  tompkinsPaige,
  lehmer,
  wells,
  schrackShimrat,
  heap,
  hall,
  substituteContent
};
