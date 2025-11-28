/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO add your code here

function getLikes(array) {
  // switch (array.length) {
  //   case 0:
  //     return "Be the first to like this";

  //   case 1:
  //     return `${array[0]} likes this`;

  //   case 2:
  //     return `${array[0]} and ${array[1]} like this`;

  //   default:
  //     return `${array[0]} and ${array.length - 1} other people like this`;
  // }

  let [a, b, ...rest] = array;

  switch (array.length) {
    case 0:
      return "Be the first to like this";

    case 1:
      return `${a} likes this`;

    case 2:
      return `${a} and ${b} like this`;

    default:
      return `${a} and ${rest.length} other people like this`;
  }
}

module.exports = getLikes;
