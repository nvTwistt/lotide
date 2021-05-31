const findKey = function(object, callback) {
  //console.log(object);
  let values = [];
  for (let items in object) {
    let location = object[items];
    //console.log(location['stars']);
    if (callback(location)) {
      console.log(items);
      break;
    }
  }
}
module.exports = findKey;
// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"