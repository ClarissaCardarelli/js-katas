/*
Run-length encoding (RLE) is a very simple form of lossless data compression, in which same consecutive elements are stored as a single data value and count.

Create a function `encode` that implements a RLE of a string. If a character is present only once or twice consecutively, you must not compress it.

Example:
* "a" -> "a"
* "aa" -> "aa"
* "aaa" -> "a3"
* "aaaabbccca" -> "a4bbc3a"

If the argument is null, return an empty string.
If the argument is not a string, throw a TypeError.

Add you own tests.

*/

// TODO add your code here

function encode(string) {
  if (typeof string !== "string" || string.length < 1) return "Invalid input";

  console.log(`String is: ${string}`);

  let word = "";
  // console.log(word)

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 2]) {
      word += string[1] + 3;
    }
    word += string[i];
  }

  // console.log(word)
  return `Answer is: ${word}`;
}

console.log(encode("aaa"));

function encode(string) {
  if (typeof string !== "string" || string.length < 1) return "Invalid input";

  console.log(`String is: ${string}`);

  let collection = {};

  for (let i = 0; i < string.length; i++) {
    // if (string[i] !== string[i + 1]|| string[i] !== string[i - 1]){
    collection[string[i]] = (collection[string[i]] || 0) + 1;
  }

  console.log(collection);
  return `Answer is: ${collection}`;
}

console.log(encode("aabbba"));

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof encode, "function");
assert.strictEqual(encode.length, 1);
// TODO add your tests:

// End of tests
