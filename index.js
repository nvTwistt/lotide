const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const letterPositions = require('./letterPositions');
const map = require('./map');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countOnly: countOnly,
  map: map,
  eqArrays: eqArrays,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  letterPositions: letterPositions,
  countLetters: countLetters,
  assertArraysEqual: assertObjectsEqual,
  without: without
};