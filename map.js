const map = function(array,callback) {
  // empty for now :)
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  let results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
module.exports = map;
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, x => x[0]);
// console.log(results1);