function swapNumbers(a, b) {
  console.log(a, b);
  let temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}
console.log(swapNumbers(1, 2));
