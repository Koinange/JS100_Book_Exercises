const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
My Answer:
No, it should print 'bar' because the const declaration occurs in two different scopes. 
If foo was reassigned in the same scope, then the code would return an error.

Book Answer:
For much the same reason as the previous exercise, this program doesn't raise an error, and it logs bar on line 6. 
One key difference, though, is that we are using const instead of let, which may have led you to believe an error would occur on line 3. 
However, since the two const variables are separate entities, no error occurs.
*/