/*
Create a function `getScore` which returns the string of the current scores of a tennis game, from a number array where each value represents the player that scored.

* [1, 1, 2, 2, 1] : serving player (1) scored twice, then the receiving player (2) scored twice, and finally the serving player (1) scored once.
The expected result is "40-30".

Game rules :

The score on the left represents the serving player (1), the score on the right represents the receiving player (2).

Scores from zero to three points are described as "love", "15", "30", and "40", respectively.

If at least three points have been scored by each player, the score is not called out as "40–40", but rather as "deuce".

If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game can be called "ad in" when the serving player (1) is ahead, and "ad out" when the receiving player (2) is ahead.

Example:
* points : [1, 1, 1], result : "40-love"
* points : [2, 1, 2, 2], result : "15-40"
* points : [1, 2, 1, 2, 1, 2], result : "deuce"
* points : [1, 1, 1, 2, 2, 2, 1], result : "ad in"

If the argument is null or not an array, throw a TypeError.
If a value of the argument is null or not a number, throw a TypeError.
If a value of the argument is not 1 or 2, throw a RangeError.

Add you own tests.

*/

// TODO add your code here

function getScore(arrayOfPoints) {
  // if (!Array.isArray(arrayOfPoints) || arrayOfPoints.length < 1)
  //   return "Invalid";
  // arrayOfPoints.forEach((element) => {
  //   if (element !== 1 && element !== 2)
  //     throw new TypeError("Not a valid value");
  // });

  const player1 = arrayOfPoints.filter((player) => player === 1).length;
  console.log({ player1 });

  const player2 = arrayOfPoints.filter((player) => player === 2).length;
  console.log({ player2 });

  let tennisScores = ["love", "15", "30", "40", "*"];

  let result = `${tennisScores[player1]}-${tennisScores[player2]}`;

  if (result === "40-40") return "deuce";
  if (result === "*-40") return "ad in";
  if (result === "40-*") return "ad out";

  return result;
}

console.log(getScore([3, 4]));

// Begin of tests
const assert = require("assert");
const { loadEnvFile } = require("process");

assert.strictEqual(typeof getScore, "function");
assert.strictEqual(getScore.length, 1);
// TODO add your tests:

// End of tests
