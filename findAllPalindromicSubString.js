function findAllPalindromicSubstring(inputString) {
  let result = [];
  for (let i = 0; i < inputString.length; i++) {
    for (let j = i + 1; j <= inputString.length; j++) {
      let substr = inputString.slice(i, j);
      if (isPalindrome(substr) && substr.length > 1) {
        result.push(substr);
      }
    }
  }
  return result;
}

function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

console.log(findAllPalindromicSubstring("radarmadamava"));
