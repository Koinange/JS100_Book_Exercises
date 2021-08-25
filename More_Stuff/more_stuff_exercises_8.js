// My Solution
//not sure in which situation my solution would fail
function isNotANumber(value) {
  if (typeof value === 'string' || typeof value === 'boolean' || typeof value === 'object' || typeof value === 'undefined') {
    return false;
  }
  else if (value <= Infinity || value >= -Infinity) {
    return false;
  }
  else return true;
}

console.log(isNotANumber(Infinity));
console.log(isNotANumber(-Infinity));
console.log(isNotANumber(Math.sqrt(-10)));
console.log(isNotANumber(true));
console.log(isNotANumber('hello world'));
console.log(isNotANumber([1, 2, 3]));

//Correct Solution
/*
function isNotANumber(value) {
  return value !== value;
}
*/
