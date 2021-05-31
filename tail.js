const tail = function(arrayList) {
  let listLength = arrayList.length;
  let tailList = [];
  for (let i = 1; i <= listLength -1 ; i++) {
    tailList.push(arrayList[i]);
  }
  return tailList;
};
module.exports = tail;
