function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = 0;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  console.log(result);
  tries += 1;
  console.log(tries);
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
/*
I forgot about the do-while concept
I had to initialize 'result' to a value that I knew would pass the while loop condition
*/