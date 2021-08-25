function oddLengths(array) {
  let stringLengthsArray = array.map(val => {
    return val.length;
  });
  let oddLengthsArray = stringLengthsArray.filter(val => {
    if (val % 2 === 1) return val;
  });
  return oddLengthsArray;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));