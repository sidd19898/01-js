/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
str1 = str1.replace(/\s+/g, '').toLowerCase();
str2 = str2.replace(/\s+/g, '').toLowerCase();
let a = str1.length;
let b = str2.length;
let g = [];
let l = [];
if (a !== b) return false;
for (let i = 0; i < a; i++) {
  g.push(str1[i]);
  console.log(g)
}

for (let i = 0; i < b; i++) {
  l.push(str2[i]);
  console.log(l)
}
const ab = (currentValue) => l.includes(currentValue);
return g.every(ab); 
}

module.exports = isAnagram;

