function countCharacter(inputString) {
  let result = {};
  for (let i = 0; i < inputString.length; i++) {
    if (!result[inputString[i]]) {
      result[inputString[i]] = 0;
    }
    result[inputString[i]] += 1;
  }
  return result;
}
console.log(countCharacter("love my Family"));

function countCharacter2(inputString) {
  let splittedString = inputString.split("");
  const result = splittedString.reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 0;
    }
    acc[char] += 1;

    return acc;
  }, {});

  return result;
}
console.log(countCharacter2("hello darling"));
