function countVowelsAndConsonants(str) {
  let vowelsCount = 0;
  let consonantCount = 0;

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowelsCount++;
    } else if (str[i] === " ") {
    } else {
      consonantCount++;
    }
  }
  return { vowelsCount, consonantCount };
}
console.log(countVowelsAndConsonants("lOve yOU"));
console.log(countVowelsAndConsonants("Hello World"));
console.log(countVowelsAndConsonants("Ashish Saluja"));

function countVowelsAndConsonants2(str) {
  let vowelsCount = 0;
  let consonantCount=0;

  let vowels = 'aeiou'
  let consonants = "bcdfghjklmnpqrstvwxyz";

  str= str.toLowerCase()

  for(let i=0; i<str.length; i++){
    if(vowels.includes(str[i])){
      vowelsCount++;
    }else if(consonants.includes(str[i])){
      consonantCount++;
    }
  }
  return {vowelsCount, consonantCount}
}
console.log(countVowelsAndConsonants2('hello'));


