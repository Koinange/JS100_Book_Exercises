const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/*
My Answer:
The code will output an error at line 6 because you can't reassign variables defined with 'const'.

Book Answer:
The program first greets Victor 3 times. 
It then encounters an error on line 6, which prevents it from greeting Joe. 
The problem is that constants are, well, constant. 
You can't reassign a constant after defining it. 
You must use regular variables instead:
*/