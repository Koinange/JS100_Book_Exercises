// My solution
// I needed the hint to solve but I believe this works
function isNegativeZero(value) {
  if (value !== 0) return false;
  else if (1/value === -Infinity) return true;
  else return false;
}

console.log(isNegativeZero(0));

// solution
// much more concisely written then my own code
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}