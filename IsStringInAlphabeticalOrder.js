function isStringInAlphabeticalOrder(str) {
  for (let i = 0; i < str.length - 1; i++) {
    console.log(str[i], str[i + 1]);
    if (str[i] > str[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isStringInAlphabeticalOrder("abcd"));
