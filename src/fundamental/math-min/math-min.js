/*
Create a function `min` which returns the lowest-valued of the two numbers passed into it,
or NaN if any parameter isn't a number.

* min(0, 0) -> 0
* min(0, 1) -> 0
* min(-1, 0) -> -1
* min("tacos", 0) -> NaN
* min() -> NaN

You can't use Math.min(), the goal is to recreate this function!

*/

// TODO add your code here

function min(number1, number2) {
  let n1 = Number(number1);
  let n2 = Number(number2);

  //   if (n1 > n2) {
  //     return n2;
  //   } else if (n2 > n1) {
  //     return n1;
  //   } else if (n1 === n2) {
  //     return 0;
  //   } else {
  //     return NaN;
  //   }

  if (isNaN(n1) || isNaN(n2)) return NaN;
  if (n1 === n2) return 0;
  return n1 > n2 ? n2 : n1;
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof min, "function");
assert.strictEqual(min.length, 2);
assert.strictEqual(min(0, 0), 0);
assert.strictEqual(min(0, 1), 0);
assert.strictEqual(min(-1, 0), -1);
assert.strictEqual(min("tacos", 0), NaN);
assert.strictEqual(min(), NaN);
// End of tests

console.log("🎉");
