// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const assertArraysEqual = function(firstArray, secondArray) {
//   let boolArray = [];
//   let numTrue = 0;
//   if (firstArray.length === secondArray.length) {
//     let arrayLength = firstArray.length;
//     for (let x = 0; x <= arrayLength - 1; x++) {
//       let response = assertEqual(firstArray[x], secondArray[x]);
//       boolArray.push(response);
//     }
//     for (let bool of boolArray) {
//       if (bool === true) {
//         numTrue += 1;
//       }
//     }
//     if (numTrue === arrayLength) {
//       return console.log("The two array's are equal");
//     } else {
//       return console.log("the two array's are not equal");
//     }
//   }
// };
const without = function(source, itemsToRemove) {
  let itemArray = [];
  for (let items of source) {
    itemArray.push(items);
  }
  for (let sources of source) {
    for (let items of itemsToRemove) {
      if (sources === items) {
        //console.log(sources, items);
        let index = source.indexOf(sources);
        //console.log(index);
        itemArray.splice(index,1);
      }
    }
  }
  return itemArray;
}
module.exports = without;
// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);