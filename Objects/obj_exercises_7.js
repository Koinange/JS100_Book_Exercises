let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
let myObj2 = {'qux': 3};
Object.assign(myObj, myObj2);

// Snippet 1 
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
// Snippet 1 iterates solely over myObj's "own" properties - that is, those defined directly on the object, not its prototype. Thus, it logs:

//Snippet 2 
for (let key in myObj) {
  console.log(key);
}
// for..in iterates over all of the object's keys, including those in the prototype object, myProtoObj

//for..in iterates over all keys
//Object.keys() only iterates over keys explixitly assigned to an object, an objects's "own" properties

console.log(Object.keys(myProtoObj));
console.log(Object.keys(myObj));
console.log(Object.keys(myObj2));