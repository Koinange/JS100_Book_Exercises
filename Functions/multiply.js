function multiplyTwoNumbers(firstNumber, secondNumber) {
  let rlSync = require('readline-sync');
  firstNumber = rlSync.question("Enter the first number: ");
  secondNumber = rlSync.question("Enter the second number: ");
  return firstNumber * secondNumber;
}

console.log(multiplyTwoNumbers());