function isPrime(number) {
  let result = true;

  if (number === 1) {
    result = false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }

  return result;
}
// console.log(isPrime(5));
// console.log(isPrime(40));

function isPrime2(number) {
  let result = true;

  if (number === 2) {
    result = true;
  } else if (number % 2 === 0) {
    result = false;
  }

  for (let i = 3; i < number; i = i + 2) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(isPrime2(1));

function isPrime3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  if (count === 2) {
    return "Prime";
  } else {
    return "Not Prime";
  }
}

// console.log(isPrime3(13));
