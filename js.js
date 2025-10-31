function compare(str1, str2) {
  if (
    typeof str1 !== "string" ||
    typeof str2 !== "string" ||
    str1.length !== str2.length
  )
    return -1;

  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) count++;
  }
  return count;
}

console.log(compare("cassis", "castor"));
