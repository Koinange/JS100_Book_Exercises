function sumOfSquares(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return currentValue * currentValue + accumulator;
  },0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array));