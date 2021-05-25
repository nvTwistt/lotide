const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};
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
      return console.log(true);
    } else {
      return console.log(false);
    }
  }
}
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false