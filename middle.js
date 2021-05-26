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
    for (let x = 0; x <= arrayLength - 1; x++) {
      let response = assertEqual(firstArray[x], secondArray[x]);
      boolArray.push(response);
    }
    for (let bool of boolArray) {
      if (bool === true) {
        numTrue += 1;
      }
    }
    if (numTrue === arrayLength) {
      return console.log("The two array's are equal");
    } else {
      return console.log("the two array's are not equal");
    }
  }
};
const middle = function(inputArray) {
  let arrayLen = inputArray.length;
  let middleArray = [];
  //case 1 (no middle for one or two elements)
  if (arrayLen === 1 || arrayLen === 2) {
    return [];
  } else if (arrayLen % 2 !== 0) {
    let index = Math.floor(arrayLen / 2);
    middleArray.push(inputArray[index]);
    return middleArray;
  } else if (arrayLen % 2 === 0) {
    //get the middle two index 
    let secondIndex = Math.floor(arrayLen / 2)
    let firstIndex = secondIndex - 1;
    middleArray.push(inputArray[firstIndex]);
    middleArray.push(inputArray[secondIndex]);
    return middleArray;
  }
  //case 2 (if there is an odd number of elements return middle one)
  //case 3 (there is an even number of elements, so return middle two)
};
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4])

eqArrays(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => true
eqArrays(middle([1, 2, 3, 4]), [2,3]); // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false