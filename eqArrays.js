const assertEqual = require('./assertEqual');
const eqArrays = function(firstArray, secondArray) {
  let boolArray = [];
  let numTrue = 0;
  if (firstArray.length === secondArray.length) {
    let arrayLength = firstArray.length;
    for (let x = 0; x <= arrayLength - 1; x++){
      let response = assertEqual(firstArray[x], secondArray[x]);
      boolArray.push(response);
    }
    for (let bool of boolArray) {
      if (bool === true) {
        numTrue += 1;
      }
    }
    if (numTrue === arrayLength) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = eqArrays;