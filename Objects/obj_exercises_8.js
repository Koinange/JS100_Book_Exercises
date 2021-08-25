function copyObj(objToCopy, refArray) {
  let copiedObject = {};
  
  if (refArray) {
    refArray.forEach(function(key) {
      copiedObject[key] = objToCopy[key];
    });
    return copiedObject;
  } else {
      Object.assign(copiedObject,objToCopy);
      return copiedObject;
    }
}

/* 
I wasn't sure how to create a conditional to check 
if an array was inputed into the funtion or not or not
*/
