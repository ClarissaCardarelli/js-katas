/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here

function abbreviate(fullName) {
  let arrayNames = fullName.split(" ");
  let letters = arrayNames.map((individual) => individual.slice(0, 1));
  return letters.join(".");
}

// function abbreviate(fullName) {
//     return fullName.split(" ").map(individual => individual.slice(0, 1)).join(".")
// }

console.log(abbreviate("Neil Patrick Harris"));
console.log(abbreviate("Clarissa Cardarelli"));

//DID NOT WRITE OWN TESTS

module.exports = abbreviate;
