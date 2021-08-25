/*
let i = 0;
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
*/

let i;
for (i = 0; i < 5;) {
  console.log(i += 1);
}


console.log(i);
/*
My Answer:
Yes it does, because you can't have do variable reassignment within the console.log method.
Variable reassignment normally has it's line of code.
I think you can put expressions but not reassignments in console.log.

Book Answer:
The code doesn't produce an error since all 3 components of the for loop are optional. 
In this code, we omit the "next value" component; 
however, this isn't a problem here since we increment the loop variable on line 2.

Correction:
I thought you couldn't do variable reassignment in console.log(). 
You most definiely can. Lesson learned.
Also the point about where i is defined and variable scope is well taken.
*/

