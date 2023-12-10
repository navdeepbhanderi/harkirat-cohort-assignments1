/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let arr = str.replaceAll(/[?,.!-' ']/g,"").toLowerCase()
  let newStr = arr.split('').reverse().join('')
  return newStr === arr;
}
module.exports = isPalindrome;