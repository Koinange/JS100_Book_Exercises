function evenOrOdd(value) {
  if (!Number.isInteger(value)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }
  if (value % 2 === 1) console.log('odd');
  else console.log('even');
}