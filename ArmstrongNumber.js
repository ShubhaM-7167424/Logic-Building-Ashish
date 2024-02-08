function isArmstrongNumber(number) {
    let num = number;
    let sum = 0;
    while(number > 0){
        let r = number % 10;
        sum += r * r * r;
        number = Math.floor(number / 10);
    }
    if(num === sum){
        return 'Armstrong';
    }else{
        return 'Not Armstrong';
    }
    
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(239));   
console.log(isArmstrongNumber(407));   
console.log(isArmstrongNumber(370));   
console.log(isArmstrongNumber(567));   