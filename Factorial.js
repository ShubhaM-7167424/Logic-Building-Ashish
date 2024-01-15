function factorial(number){
  let fact = 1;
  for(i= number; i>0; i--){
    fact = fact * i;
  }
  return fact;

}

console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(1));
console.log(factorial(10));



