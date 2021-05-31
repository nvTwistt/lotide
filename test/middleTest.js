const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => true
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => false
module.exports = middle;
module.exports = assertArraysEqual;