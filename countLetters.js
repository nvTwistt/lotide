const countOnly = function(inputList) {
  const results = {};
  for (let item of inputList) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
};
const splitter = function(inputString) {
  let cleanString = inputString.replace(/\s+/g, '');
  let splitString = cleanString.split("");
  return splitString;
};

const countLetters = function(sentance) {
  let splitString = splitter(sentance);
  let letterCount = countOnly(splitString);
  return letterCount;
}
module.exports = countLetters;
