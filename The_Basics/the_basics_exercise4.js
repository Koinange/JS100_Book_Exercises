console.log('5' + 10);
/*
My Explanation:
because of string coercion. 
Javascript coerced the number type into a string to make the operation valid

Book Explanation:
The code logs 510 since every + expression that has a string operand produces a string result no matter what the other operand is. 
In other words, the Number 10 gets coerced to a String and then gets concatenated to the String '5', which produces '510'.
*/