function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*
My Answer:
the console will log the following
'Product 2'
'Product 3'
'Product not found!'

This happens because there are no break statements after each case.
The code execution "falls through" to the next case clause once one of the requirements have been met

Book Answer:
Since the case clauses of the switch statement lack break statements, 
control falls through from the matching case '113' clause and executes the code in the case '142' and default clauses as well. 
JavaScript doesn't care that the criteria for extra case clauses don't match our serial value. 
This fall-through behavior is often undesirable. 
To avoid it, you must add break statements to each case clause:
*/
