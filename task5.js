// Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, operator, num2) => {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b === 0 ? "Division by zero is not allowed" : a / b),
  };

  const operation = operators[operator];
  if (operation) {
    return operation(num1, num2);
  } else {
    return "Invalid operator";
  }
};

const num1 = 5;
const operator1 = "+";
const num2 = 3;
const result1 = calculator(num1, operator1, num2);
console.log(result1);

const num3 = 10;
const operator2 = "-";
const num4 = 2;
const result2 = calculator(num3, operator2, num4);
console.log(result2);

const num5 = 4;
const operator3 = "*";
const num6 = 7;
const result3 = calculator(num5, operator3, num6);
console.log(result3);

const num7 = 7;
const operator4 = "/";
const num8 = 3;
const result4 = calculator(num7, operator4, num8);
console.log(result4.toFixed(2));

