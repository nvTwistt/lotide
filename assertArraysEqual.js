const eqArrays = require('./eqArrays');
const assertArraysEqual = function(firstArray, secondArray) {
  let result = eqArrays(firstArray,secondArray);
    if (result) {
      return console.log("The two array's are equal");
    } else {
      return console.log("the two array's are not equal");
    }
};
module.exports = assertArraysEqual;