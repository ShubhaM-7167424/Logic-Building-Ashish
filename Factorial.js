// function factorial(number){
//   let fact = 1;
//   for(i= number; i>0; i--){
//     fact = fact * i;
//   }
//   return fact;

// }

// console.log(factorial(5));
// console.log(factorial(7));
// console.log(factorial(1));
// console.log(factorial(10));

function Factorial(number) {
  let factorial = 1;
  for(let i=number; i>0; i--){
    factorial = factorial * i;
  }
  return factorial
}

console.log(Factorial(1));
console.log(Factorial(0));
console.log(Factorial(6));
