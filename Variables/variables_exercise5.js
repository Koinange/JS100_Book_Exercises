let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*
My Answer:
foo will print 'bar' because the the scope of foo declaration is confined to the brackets.
let foo = 'qux'is a local variable.let foo = 'bar' is a global variable

Book Answer:
Line 1 initializes a variable named foo with the value'bar'. 
Line 2 starts a block, which creates a new scope for let variables. 
The variable on line 1 is still visible at this point, but line 3 declares a new variable named foo that shadows (hides) the variable from line 1. 
This second variable gets initialized to 'qux', but it goes out of scope on line 4 when the block ends. 
That brings foo from line 1 back into scope, so line 6 logs its value: bar.
*/
