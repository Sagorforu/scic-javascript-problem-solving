// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumeral) {
  const romanNumeralsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentNumeral = romanNumeral[i];
    const nextNumeral = romanNumeral[i + 1];

    const currentValue = romanNumeralsMap[currentNumeral];
    const nextValue = romanNumeralsMap[nextNumeral];

    if (currentValue < nextValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }
  return result;
}

const romanNumeral1 = "X";
console.log(romanToInt(romanNumeral1));
