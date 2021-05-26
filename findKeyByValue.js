const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed ${actual} !== ${expected}`);
  }
};
const findKeyByValue = function(incomingObject, value) {
  //const key = Object.keys(incomingObject).find(key => incomingObject[key] === value);
  for (var items in incomingObject) {
    var itemKey = incomingObject[items];
    if (itemKey === value) {
      return items;
    }
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);