let value = 4936;
let ones = value % 10;
console.log('ones = ' + ones );

value = (value - ones)/10;
let tens = value % 10;
console.log('tens = ' + tens );

value = (value - tens) / 10;
let hundreds = value % 10;
console.log('hundreds = ' + hundreds );

value = (value - hundreds) / 10;
let thousands = value % 10;
console.log('thousands = ' + thousands );
