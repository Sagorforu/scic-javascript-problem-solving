// Write a JavaScript program to find the most frequent element in an array and return it.
//Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function findMostFrequentElement(arr) {
  let frequencyCounter = {};
  let maxFrequency = 0;
  let mostFrequentElement;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element)
    frequencyCounter[element] =
      (frequencyCounter[element] || 0) + 1;
    if (frequencyCounter[element] > maxFrequency) {
      maxFrequency = frequencyCounter[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(inputArray);
console.log(mostFrequent);
