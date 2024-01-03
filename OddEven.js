function checkIfEvenOrOdd(number){
    if(number % 2 === 0){
        console.log(`${number} is even`);
    }else{
        console.log(`${number} is odd`);
    }
}

function checkIfEvenOrOdd2(number){
   return  number % 2 === 0 ? `${number} is even` : `${number} is odd`;
}

console.log(checkIfEvenOrOdd(5));
console.log(checkIfEvenOrOdd(24));
console.log(checkIfEvenOrOdd(-4));
console.log(checkIfEvenOrOdd(17));
console.log(checkIfEvenOrOdd(0));

console.log(checkIfEvenOrOdd2(38));
console.log(checkIfEvenOrOdd2(157));