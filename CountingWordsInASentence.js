function countWords(sentence) {
    console.log(sentence);
    sentence = sentence.trim()
    console.log(sentence);
    splittedSentence = sentence.split(' ')
    console.log(splittedSentence);
    nonEmptyElements = splittedSentence.filter(element => element != '')
    console.log(nonEmptyElements);
    return nonEmptyElements.length;
}

console.log(countWords(' i love my   country very much           '));
console.log(countWords(' i have brought a      bike '));