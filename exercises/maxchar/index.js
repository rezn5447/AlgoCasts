// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// convert str into object with frequency as values

function maxChar(str) {
  var charMap = {};
  str.split('').map(l => charMap[l] > 0 ? charMap[l]++ : charMap[l] = 1)
  return charMapMath.max(...Object.values(charMap))
}



function maxChar(str) {
  var charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str){
    if(charMap[char]) {
      charMap[char]++;
    }
    else {
      charMap[char] = 1;
    }
  }
  for ( let char in charMap){
    if (charMap[char] > max){
      max = charMap[char];
      maxChar = char
    }
  }
  console.log(charMap)
  return maxChar;
}

module.exports = maxChar;
