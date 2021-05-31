const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed ${actual} !== ${expected}`);
  }
};
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
module.exports = eqObjects;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// //eqObjects(ab, ba)
// assertEqual(eqObjects(ab, ba),"true"); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc),"false"); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc),"true"); // => true

// //const cd = { c: "1", d: ["2", 3] };
// const dc2 = { d: ["2", 4], c: "1" };
// assertEqual(eqObjects(cd, dc2),"false"); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2),"false"); // => false