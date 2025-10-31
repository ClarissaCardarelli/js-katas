/*
In cryptography, a Caesar cipher is a simple encryption technique, in which each letter in text is replaced by a letter some fixed number of positions down the alphabet.

For example, with a right shift of 3, a becomes d, b becomes e, and so on until w which become z. Then x, y and z become a, b and c.

Create a function `cipher` which encrypts a word (only in lowercase) using Caesar cipher, where the shift value (which can be positive or negative) is a parameter.

  word:      shift:   result:
* "abcd"     1        "bcde"
* "abcd"     -1       "zabc"
* "tacos"    3        "wdfrv"
* "zebra"    2        "bgdtc"

If `word` is null or not a string, or if `shift` is null or not a number, throw a TypeError.

Add you own tests.

*/

// TODO add your code here

function cipher(word, nbShift) {
  if (typeof word !== "string" || typeof nbShift !== "number") return "Invalid";

  const abc = "abcdefghijklmnopqrstuvwxyz";
  let newWord = "";

  for (const letter of word) {
    let index = abc.indexOf(letter);

    let newIndex = index + nbShift;

    if (newIndex >= 26) {
      newIndex -= 26;
    } else if (newIndex <= 0) {
      newIndex += 26;
    }

    newWord += abc.charAt(newIndex);
  }

  return newWord;
}

console.log(cipher("ab", 1));

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof cipher, "function");
assert.strictEqual(cipher.length, 2);
// TODO add your tests:

// End of tests
