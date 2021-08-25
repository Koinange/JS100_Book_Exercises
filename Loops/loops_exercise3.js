let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;
  console.log(counter);
  if (counter > 2) {
    break;
  }
}


/*
My Explanation:
The conditional statement keeps reassigning counter to 1.
The break steatment is never executed because counter equals two but is not greater than 2.

Book Solution:
The problem occurs on line 3 where we assign 1 to counter inside the conditional part of the while loop. 
JavaScript accepts this code since the assignment always returns a truthy value (1 in this case), 
the loop condition never becomes false. 
Furthermore, the test on line 7 never becomes true since the assignment on line 3 ensures that counter is always equal to 2 when we execute line 7.
*/