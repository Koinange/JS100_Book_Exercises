let bar = 1;
function foo() {
  bar = 2;
}

foo();
console.log(bar);
/*
My Answer:
Yes, The function will output 2.
Once the funtion is called in the same scope as the inital declartion and assignment of bar,
The function then can reassign the value of bar without a problem.

Book Answer:
The code logs 1 to the console. 
foo doesn't affect the value assigned to bar on line 1 since JavaScript functions create an inner scope. 
Thus, the bar variable on line 3 is not the same as the one on line 1. 
In the end, foo() has no bearing on the final output.

My Correction/feedback:
I understand my error now. 
A new variable is declared within the local scope of the function.
global variables can be referenced in local scopes, 
but local variables can't be refenced in global scopes.

