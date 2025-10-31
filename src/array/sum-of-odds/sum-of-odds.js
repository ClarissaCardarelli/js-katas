/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

// TODO add your code here

function sum(array) {
  if (!Array.isArray(array) || array.length < 1) return 0;

  return array
    .filter((el) => el % 2 !== 0)
    .reduce((total, el) => total + el, 0);
}

console.log(sum([-3, 3]));

module.exports = sum;
