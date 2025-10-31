/*



Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true

Add you own tests.

*/

// TODO add your code here

function isPalindrome(word) {
  if (typeof word !== "string" || word.length <= 0) return "Invalid input";

  let punctuation = ':;" ,?!-_';

  word = word
    .toLowerCase()
    .split("")
    .filter((letter) => ![...punctuation].includes(letter));
  //   console.log(word);
  let wordNoSpaces = word.join("");
  //   console.log(wordNoSpaces);
  let reversed = word.reverse().join("");
  //   console.log(reversed);
  return reversed === wordNoSpaces;
}

console.log(isPalindrome("Able! wa   s I ere I saw Elba"));

//DID NOT WRITE OWN TESTS

module.exports = isPalindrome;
