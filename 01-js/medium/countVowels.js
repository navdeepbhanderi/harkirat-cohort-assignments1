/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = 'aeiou'
  let vowelsCount = 0;
  let arr = str.toLowerCase().split('')
  arr.filter((st)=>{
    if(vowels.includes(st)){
      vowelsCount++
    }
  })
  return vowelsCount;
}

// console.log(countVowels("EaSiEr"))
module.exports = countVowels;