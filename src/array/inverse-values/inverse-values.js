/*
Create a function `inverse`, which given an array of numbers, return the additive inverse of each : each positive becomes negatives, and the negatives become positives.

You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

Example:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []

Don't mutate the parameter.

*/

// TODO add your code here

// let newArray = [];

// function inverse(array) {
//   if (!Array.isArray(array) || array.length === 0) return newArray;

//   for (let i = 0; i < array.length; i++) {
// if (array[i] <= 0) {
//   newArray.push(Math.abs(array[i]));
// } else {
//   newArray.push(-Math.abs(array[i]));
// }

// array[i] <= 0
//   ? newArray.push(Math.abs(array[i]))
//   : newArray.push(-Math.abs(array[i]));
//   }
//   return newArray;
// }

//doing the same thing (push) so can simply with map

// function inverse(array) {
//   if (!Array.isArray(array) || array.length === 0) return [];

// return array.map(num => -num)
// dont like that it changes 0 to -0

//   return array.map((num) => (num <= 0 ? Math.abs(num) : -Math.abs(num)));
// }

// in above, we are doing if true, return this, else... so the whole thing could be a ternary operator : is array, do this, if not, return empty array. But less readable ?

function inverse(array) {
  return Array.isArray(array) && array.length > 0
    ? array.map((num) => (num <= 0 ? Math.abs(num) : -num))
    : [];
}

module.exports = inverse;
