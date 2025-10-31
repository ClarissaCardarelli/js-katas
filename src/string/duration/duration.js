/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/

// TODO add your code here

function convertTime(time) {
  let valid = /[\d]{2}:[\d]{2}/;

  if (typeof time !== "string" || !valid.test(time)) return null;

  let parts = time.split(":");
  let hours = Number(parts[0]);
  let minutes = Number(parts[1]);
  return hours * 60 + minutes;
}

console.log(convertTime("02:30"));

//DID NOT WRITE OWN TESTS

module.exports = convertTime;
