const args = process.argv;
let splitList = args.slice(2);
const reverse = function(input) {
  let splitString = input.split("");
  let reverseString = "";
  for (let x = splitString.length - 1; x >= 0; x--) {
    reverseString += splitString[x];
  }
  return reverseString;
};
while (splitList.length >= 1) {
  console.log(reverse(splitList[0]));
  splitList.shift();
}

