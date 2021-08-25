function findIntegers(array){
  return array.filter(val => {
    if (Number.isInteger(val)) return val;
  });
}


let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers);
