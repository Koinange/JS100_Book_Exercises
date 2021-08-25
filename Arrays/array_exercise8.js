function oddLengths(array) {
  return array.reduce((accumulator, currentValue) => {
    if (currentValue.length % 2 === 1) accumulator.push(currentValue.length);
    return accumulator;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]