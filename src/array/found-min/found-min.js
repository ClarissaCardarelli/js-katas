/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here

// function min(array) {
//   if (!Array.isArray(array) || array.length === 0) return null;
//   let newArray = [...array].sort((a, b) => a - b);
//   return newArray[0];
// }

// check if array, use Array.isArray(tester)
// spread to create copy. we do not want to change the og

// could do if array, do this, else...

function min(array) {
  return Array.isArray(array) && array.length > 0
    ? [...array].sort((a, b) => a - b)[0]
    : null;
}

module.exports = min;
