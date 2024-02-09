function LargestDigitInANumber(number) {
  let largestDigit = number % 10;
  number = Math.floor(number / 10);
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
