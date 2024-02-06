function findLongestWordInASentence(str) {
  let words = str.split(" ");
  let maxLength = 0;
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }
  return {maxLength, longestWord};
}

console.log(findLongestWordInASentence("I have a car"));
console.log(findLongestWordInASentence("I am a human being"));
console.log(findLongestWordInASentence("I am a character from mahabharata"));
