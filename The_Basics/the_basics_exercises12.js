'12' < '9';

/*
My Answer:
false, because 12 is greater than 9. 
Not sure will if javascript will convert strings to numbers to evaluate the bolean expression

Book Answer:
This question is a bit tricky: the expression evaluates as true since the operands are strings, not numbers. 
When you compare two strings, JavaScript performs a character-by-character comparison going from left to right, 
so on the first comparison, it determines that '1' < '9', so '12' must be less than '9'.'
Had you used numbers instead, the expression would evaluate as false.
*/

 
 