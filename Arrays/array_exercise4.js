let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let answer = myArray.map(val => {
  if (val % 2 == 1) return 'odd';
  else return 'even';
});

console.log(answer);