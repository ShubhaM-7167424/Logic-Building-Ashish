function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  if(sum > 9){
    sum = sumOfDigits(sum)
  }
  return sum;
}

console.log(sumOfDigits(456));
console.log(sumOfDigits(91832));
console.log(sumOfDigits(830042));
