const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual}  ===   ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual}  !==   ${expected}`);
  }
};
const head = function(arrayList, headNode) {
  var firstNode = arrayList[0];
  return firstNode;
}
assertEqual(head([]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");