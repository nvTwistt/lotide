const tail = function(arrayList) {
  let listLength = arrayList.length;
  let tailList = [];
  for (let i = 1; i <= listLength; i++) {
    tailList.push(arrayList[i]);
  }
  return tailList;
};
tail(["Hello", "Lighthouse", "Labs"])
module.exports = {tail:tail};