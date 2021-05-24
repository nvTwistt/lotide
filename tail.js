const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual}  ===   ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual}  !==   ${expected}`);
  }
};
const tail = function(arrayList) {
  let listLength = arrayList.length;
  let tailList = [];
  for (let i = 1; i <= listLength; i++) {
    tailList.push(arrayList[i]);
  }
  return tailList;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!