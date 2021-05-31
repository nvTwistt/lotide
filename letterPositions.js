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
module.exports = letterPositions;
//eqArrays([1, 2, 3], [1, 2, 3]); // => true
//console.log(letterPositions("lighthouse in the house"));