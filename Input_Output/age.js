let rlSync = require('readline-sync');
let age = rlSync.question("How old are you? ");
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${Number(age) + 10} years old.`);
console.log(`In 10 years, you will be ${Number(age) + 20} years old.`);
console.log(`In 10 years, you will be ${Number(age) + 30} years old.`);
console.log(`In 10 years, you will be ${Number(age) + 40} years old.`);