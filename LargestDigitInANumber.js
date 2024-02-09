function LargestDigitInANumber(number) {
  let largestDigit = 0;

  while (number > 0) {
    let r = number % 10;
    if (r > largestDigit) {
      largestDigit = r;
    }
    number = Math.floor(number / 10);
  }

  return largestDigit;
}
console.log(LargestDigitInANumber(7541));
console.log(LargestDigitInANumber(1239));
console.log(LargestDigitInANumber(12543));
