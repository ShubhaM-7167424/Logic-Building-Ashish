function largestOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(largestOfThreeNumbers(1, 2, 3));
console.log(largestOfThreeNumbers(1, 12, 3));
console.log(largestOfThreeNumbers(187, 12, 813));
console.log(largestOfThreeNumbers(-187, 12, -813));
