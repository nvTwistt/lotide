// const tail = require('../tail');
// const assertEqual = require('../assertEqual');
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// module.exports = tail;
// module.exports = assertEqual;
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    let x = tail([1,2,3]);
    assert.deepEqual(x, [2,3]);
  });
  it("returns ['5'] for ['6','5']", () => {
    let x = tail(['6','5']);
    assert.deepEqual(x, ['5']); 
  });
});
