// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements.";
  }

  const uniqueSortedArray = [...new Set(arr)].sort((a, b) => a - b);

  if (uniqueSortedArray.length < 2) {
    return "No second smallest element found in the array.";
  }
  return uniqueSortedArray[1];
}

const numbers1 = [5, 4, 8, 1, 3];
console.log(findSecondSmallest(numbers1));
