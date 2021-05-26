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
const countIndex = function(character,incomingArray) {
  let indexArray = [];
  for (x = 0; x <= incomingArray.length - 1; x++) {
    if(character === incomingArray[x]){
      indexArray.push(x);
    }
  }
  return indexArray;
};
const getUniqueValues = function(inputArray) {
  return [... new Set(inputArray)];
};
const cleanSplitter = function(inputString) {
  const cleanString = inputString.replace(/\s+/g, '');
  const splitString = cleanString.split("");
  return splitString;
};
const splitter = function(inputString) {
  const splitString = inputString.split("");
  return splitString;
};
const countOnly = function(inputList,splitString) {
  const results = {};
  for (const item of inputList) {
    const indexCounter = countIndex(item,splitString);
    results[item] = indexCounter;
  }
  return results;
};
const letterPositions = function(sentance) {
  sentance = sentance.toLowerCase();
  const splitString = splitter(sentance);
  const cleanString = cleanSplitter(sentance);
  const uniqueArray = getUniqueValues(cleanString);
  const counts = countOnly(uniqueArray,splitString);
  return counts; 
;}

//eqArrays([1, 2, 3], [1, 2, 3]); // => true
console.log(letterPositions("lighthouse in the house"));