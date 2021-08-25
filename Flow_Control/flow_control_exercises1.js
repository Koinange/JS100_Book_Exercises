/*
My Answer:
false || (true && false); false
true || (1 + 2);  true  
(1 + 2) || true;  true
true && (1 + 2); true
false && (1 + 2); false
(1 + 2) && true; true
(32 * 4) >= 129; false
false !== !true; false
true === 4; false
false === (847 === '847'); true
false === (847 == '847'); false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; true

Solution:
false || (true && false); false
true || (1 + 2);  true 
(1 + 2) || true;  3
true && (1 + 2); 3
false && (1 + 2); false
(1 + 2) && true; true
(32 * 4) >= 129; false
false !== !true; false
true === 4; false
false === (847 === '847'); true
false === (847 == '847'); false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; true

10/12 correct!
I missed the ones with the number to boolean comparison;
*/
