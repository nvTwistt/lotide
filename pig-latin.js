const args = process.argv;
let splitList = args.slice(2);
const head = function(arrayList) {
  let firstNode = arrayList[0];
  return firstNode;
};
const tail = function(arrayList) {
  let listLength = arrayList.length;
  let tailString = [];
  for (let i = 1; i <= listLength - 1; i++) {
    tailString += arrayList[i];
  }
  return tailString;
};
const splitter = function(inputList) {
  let splitString = inputList.split("");
  return splitString;
};
const translate = function(head, tail) {
  let latinString = "";
  latinString = tail + head + 'ay';
  return latinString;
};

let latinString = "";
while (splitList.length >= 1) {
  latinString += translate(head(splitter(splitList[0])),tail(splitter(splitList[0]))) + " ";
  splitList.shift();
}
console.log(latinString.trim());