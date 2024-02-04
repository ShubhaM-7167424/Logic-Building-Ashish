function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new Error("Only Strings are allowed");
  }

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("malayalam"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("rafting"));
console.log(isPalindrome(479));
