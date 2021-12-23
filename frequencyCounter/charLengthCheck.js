//1st way

function charecterCount(str) {
  //create empty object to return response with key and value
  //Check the char is alphanuemric
  let obj = {};

  for (let char of str) {
    if (isAlphanumeric(char)) {
        char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphanumeric(char) {
  let code = char.charCodeAt(0);
  if (
    (code > 47 && code < 58) ||
    (code > 64 && code < 91) ||
    (code > 96 && code < 123)
  )
    return true;
  return false;
}

//Second way of writing it
/*function charecterCount(str) {
  //create empty object to return response with key and value
  //Check the char is alphanuemric
  let obj = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}*/

console.log(charecterCount('S123hitalSs'));
