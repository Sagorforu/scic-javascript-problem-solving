// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(myString) {
  let reversedString = "";
  for (let i = myString.length - 1; i >= 0; i--) {
    reversedString += myString[i];
  }
  return reversedString;
}

const myString = "hello world";
const result = reverseString(myString);
console.log(result);
