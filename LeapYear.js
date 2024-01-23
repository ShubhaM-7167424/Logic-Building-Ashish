function isLeapYear(year){
    if(year % 4 === 0){
        return 'Leap Year'
    }else{
        return 'Non Leap Year'
    }
}



console.log(isLeapYear(1999));
console.log(isLeapYear(2004));
console.log(isLeapYear(1697));


