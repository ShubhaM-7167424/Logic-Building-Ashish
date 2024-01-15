function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOrOdd(0));
console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(787));
console.log(checkEvenOrOdd(-3186));


function checkEvenOrOdd2(num){
    let result = num % 2 === 0 ? "Even" : "Odd";
    return result;
}

console.log(checkEvenOrOdd2(0));
console.log(checkEvenOrOdd2(9));
console.log(checkEvenOrOdd2(-1177));
console.log(checkEvenOrOdd2(8234));


