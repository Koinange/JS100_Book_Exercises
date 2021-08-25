function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/*
My Answer:
The code logs 'undefined' to the console. 
The console.log call comes after the return statement so it never gets called

Book Answer:
It doesn't log anything. The return on line 3 terminates the function before it can log anything.

Correction:
Return will alwys stop the code within the function so anything that comes after it won't run.
 */