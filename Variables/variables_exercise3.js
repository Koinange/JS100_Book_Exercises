{
  let foo = 'bar';
}

console.log(foo);

/*
My Answer:
the program outputs an error
foo is not defined outside the code block above. 
foo is not a global variable.

Book Answer:
The program outputs an error since foo is out of scope: the let statement creates variables with block scope, which limits the visibility of the variable to the block. 
Even though console.log(foo) comes after the declaration and initialization of foo, we still get an error since we declared foo inside the block. 
Outside the block, foo doesn't exist.