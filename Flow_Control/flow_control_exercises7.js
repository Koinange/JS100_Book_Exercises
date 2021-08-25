function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else return string;
}

console.log(allCaps("Sue Smith"));     // => Sue Smith
console.log(allCaps("Sue Robertson")); // => SUE ROBERTSON
console.log(allCaps("Joe Thomas"));    // => Joe Thomas
console.log(allCaps("Joe Stevens"));   // => JOE STEVENS

