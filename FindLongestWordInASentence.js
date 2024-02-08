function findLongestWordInASentence(str) {
  let words = str.split(" ");
  let longestLength = words[0].length;
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longestLength = words[i].length;
      longestWord = words[i];
    }
  }
  return { maxLength: longestLength, longestWord };
}

console.log(findLongestWordInASentence("I have a car"));
console.log(findLongestWordInASentence("I am a human being"));
console.log(findLongestWordInASentence("I am a character from mahabharata"));
