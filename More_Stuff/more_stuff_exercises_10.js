/*

let y = "5"
> y++


My guess:
Honestly not sure, my guess would be '51' again because of string coercion

The solution:
If you apply ++ to a string, JavaScript coerces it into a number. 
In this case, "5" gets coerced to the number 5. 
After coercion, it then increments the value to 6. 
However, the return value is 5 since the post-increment operator (y++) returns the original value of y, not the incremented value.

I was on the right track with the idea of coercion but I definiely applied it wrong. 
I also comletely forgot about the return value of the post-increment operator (y++: original value) vs the pre-increment operator (++y: incremented value);

*/