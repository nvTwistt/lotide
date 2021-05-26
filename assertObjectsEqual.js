const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  if (objKeys1.length === objKeys2.length) {
    const arrayValues = [];
    for (let item1 in object1) {
      let value1 = object1[item1];
      for (let item2 in object2) {
        let value2 = object2[item2];
        if (Array.isArray(value2) && Array.isArray(value1)) {
          let firstValueLen = value1.length;
          let secondValueLen = value2.length;
          const trueObject = {"isEqual": 0};
          if (firstValueLen === secondValueLen) {
            for (let x = 0; x <= firstValueLen - 1; x++) {
              if (value1[x] === value2[x]) {
                trueObject["isEqual"] += 1;
              }
            }
            if (trueObject["isEqual"] === firstValueLen) {
              arrayValues.push("true");
            }
          }
        } else {
          if (item1 === item2 && value1 === value2) {
            arrayValues.push("true");
          }
        }
        
      }
    }
    let trueCount = 0;
    for (let items of arrayValues) {
      if (items === 'true') {
        trueCount++;
      }
    }
    if (trueCount === objKeys1.length) {
      return "true";
    } else {
      return "false";
    }
  } else {
    return "false";
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const isEqual = eqObjects(actual,expected)
    if (isEqual === "true") {
      console.log(`Assertion Passed: ${inspect(actual)}  ===   ${inspect(expected)}`);
    } else {
      console.log(`Assertion Failed: ${inspect(actual)}  !==   ${inspect(expected)}`);
    }
}
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);