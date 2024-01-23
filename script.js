function smallestNumber(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}

function LargestNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(LargestNumber(1, 2, 3));
console.log(LargestNumber(300, 200, 600));
console.log(LargestNumber(100, 100, 100));
console.log(LargestNumber(1, 832, 3));