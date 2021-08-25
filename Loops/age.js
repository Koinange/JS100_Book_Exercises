let rlSync = require('readline-sync');
let age = rlSync.question("How old are you? ");
console.log(`You are ${age} years old.`);
for (let i = 1; i < 5; i += 1) {
  console.log(`In ${10 * i} years, you will be ${Number(age) + (10 * i)} years old.`);
}
