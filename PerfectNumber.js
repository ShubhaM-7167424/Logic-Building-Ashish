function perfectNumber(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if (sum === number) {
    return "Perfect Number";
  } else {
    return "Not Perfect Number";
  }
}

console.log(perfectNumber(8128));