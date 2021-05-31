const map = function(array,callback) {
  // empty for now :)
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  let results = [];
  
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log(callback(item));
    //console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}
module.exports = map;
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, x => x[0]);
// console.log(results1);