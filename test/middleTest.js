// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => true
// assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => false
// module.exports = middle;
// module.exports = assertArraysEqual;

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#tail", () => {
  it("returns [3,4] for [1, 2, 3, 4, 5, 6]", () => {
    let x = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(x, [3,4]);
  });
  it("returns [2,3] for [1, 2, 3, 4]", () => {
    let x = middle([1, 2, 3, 4]);
    assert.deepEqual(x, [2,3]); 
  });
  it("returns [2] for [1, 2, 3]", () => {
    let x = middle([1, 2, 3]);
    assert.deepEqual(x, [2]); 
  });
});