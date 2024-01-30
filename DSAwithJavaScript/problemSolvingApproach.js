//Problem should solved through the following approach:
// 1. Understand the problem
// 2. Explore concrete examples
// 3. Break it down
// 4. Solve or Simplify
// 5. Look back and refactor



// write a function that must take only two numbers and return the sum:
// function sum(...args) {
//   return args.length === 2 && typeof (args[0] + args[1]) === "number"
//     ? args[0] + args[1]
//     : `${args.length === 2 ? "Input must be of type number" : "Number of arguments must be two"}`;
// }
// console.log(sum(1,"4"));
// write a function which takes only one string and returns the number of characters:

// function charCount(...args){
// return args.length === 1 && typeof (args[0]) === "string"?
// args[0].length:`${args.length === 1?"Input must be a string":"Number of arguments must be one"}`;
// }
// console.log(charCount("Iwant"));

// write a function which takes only one string and returns an object with alphanumeric
// characters in lowercases as keys and number of times it occurs as values.

function charCount(...args){
if(args.length<1 || args.length>1){
  console.log("Only one string should be input");
  return;
} else if(typeof args[0] !== "string"){
  console.log("Input should only be a string");
  return;
}
let myObj = {};
myString = args[0].toLowerCase().match(/[a-z0-9]/g).toString().replaceAll(",","");
for(let char of myString){
  if(myObj[char]){
   myObj[char] = myObj[char] + 1;
  }else{
    myObj[char] = 1;
  }
}
return myObj;
}
const myCount = charCount(",.*9%%%Iwnatto");
console.log(myCount);
