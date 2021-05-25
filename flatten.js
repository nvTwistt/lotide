const recurse = function(inArray, outArray) {
  if (inArray.length === 1) {
    outArray.push(inArray[0]);
  } else {
    let x = inArray[0];
    inArray.shift();
    outArray.push(x);
    recurse(inArray, outArray);
  }
  return outArray;
};
const flatten = function(inputArray) {
  let flattenedArray = [];
  for (let items of inputArray) {
    if (Array.isArray(items)) {
      recurse(items, flattenedArray);
    } else {
      flattenedArray.push(items);
    }
  }
  console.log(flattenedArray);
};
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
