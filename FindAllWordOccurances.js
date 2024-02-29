let bigString =
  "This is a big string with the word big repeated in the big string";
let wordToFind = "big";

function findAllWordOccurances(big, word) {
  let index = big.indexOf(word);
  let result = [];

  while (index !== -1) {
    result.push(index);
    index = big.indexOf(word, index + 1)
    
  }
  return result;
}

console.log(findAllWordOccurances(bigString, wordToFind));
