// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
// Example Input: [2, -5, 10, -3, 7] Example Output: 19


function positiveNumber(array) {
  let sumOfPositive = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log( "from element line:",element);
    if (element > 0) {
      sumOfPositive += element;
    }
  }
  return sumOfPositive;
}

const numbersArray = [2, -5, 10, -3, 7];
const result = positiveNumber(numbersArray);
console.log(result);
