function smallestDigitInANumber(number) {
  let smallestDigit = 9;

  while (number > 0) {
    let r = number % 10;
    if (r < smallestDigit) {
      smallestDigit = r;
    }
    number = Math.floor(number / 10);
  }

  return smallestDigit;
}

console.log(smallestDigitInANumber(3418));
console.log(smallestDigitInANumber(3052));
