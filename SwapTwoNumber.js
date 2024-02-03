function swapNumbers(a, b) {
  console.log(a, b);
  let temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}
console.log(swapNumbers(1, 2));

function swapNumbers2(a, b) {
  console.log(a, b);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}
console.log(swapNumbers2(5, 2));

function swapNumbers3(a, b) {
  console.log(a, b);
  a = a * b;
  b = a / b;
  a = a / b;
  console.log(a, b);
}
console.log(swapNumbers3(15, 3));

function swapNumbers4(a, b) {
  console.log(a, b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log(a, b);
}
console.log(swapNumbers4(25, 5));

function swapNumbers5(a, b) {
  console.log(a, b);
  a = a | b;
  b = a & b;
  console.log(a, b);
}
console.log(swapNumbers5(10, 2));

function swapNumbers6(a, b) {
  console.log(a, b);
   [a, b] = [b, a];
  console.log(a, b);
}
console.log(swapNumbers6(20, 5));
