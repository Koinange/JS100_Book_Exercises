let list1 = [1, 6, 3, 2];
let list2 = [-1, -6, -3, -2];
let list3 = [2, 2];

function maxValue(refArray) {
  let max = refArray.reduce((a,b) => {
    return Math.max(a, b);
  });
  return max;
}

console.log(maxValue(list1));
console.log(maxValue(list2));
console.log(maxValue(list3));