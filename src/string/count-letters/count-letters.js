/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.

If the string or the character is null, return -1.
If the character length is other than 1, return -1.

Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1

Add you own tests.

*/

// TODO add your code here

function countChar(word, character) {
  if (
    typeof word !== "string" ||
    typeof character !== "string" ||
    character.length !== 1
  )
    return -1;

  //   let result = word
  //     .split("")
  //     .reduce((acc, letter) => acc + (letter === character), 0);
  //   return result;
  // above we are changing the string to an array in order to use .reduce

  let count = 0;
  for (const letter of word) {
    if (letter === character) count++;
  }
  return count;

  //above way shows looping thru string with for of loop
  //const bc letter never changes and let bc count changes
}

module.exports = countChar;
