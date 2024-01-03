function smallestOfThree(a, b, c) {
    if(a > b && a > c){
        if(b > c){
            return c;
        }else{
            return b;
        }
    }else if(b > a && b > c){
        if(a > c){
            return c;
        }else{
            return a;
        }
    }else if(c > a && c > b){
        if(a > b){
            return b;
        }else{
            return a;
        }
    }
    return a;
}

function smallestOfThree2(a, b, c) {
    if(a < b && a < c){
        return a;
    }else if(b < a && b < c){
        return b;
    }else if( c < a && c < b){
        return c;
    }
}

function smallestOfThree3(a, b, c) {
    let smallestNumber = a;
    if(b < smallestNumber){
        smallestNumber = b;
    }else if(c < smallestNumber ){
        smallestNumber = c;
    }
    return smallestNumber;
}

console.log("smallestOfThree(1, 5, -3)",smallestOfThree(1, 5, -3)); 
console.log("smallestOfThree(1, -35, 3)", smallestOfThree(1, -35, 3)); 
console.log("smallestOfThree(13, 75, 399)", smallestOfThree(13, 75, 399)); 
console.log("smallestOfThree(-1, -6, 9)", smallestOfThree(-1, -6, 9)); 
console.log("smallestOfThree(3, 3, 3)", smallestOfThree(3, 3, 3)); 
console.log("smallestOfThree(3, 3, 1)", smallestOfThree(3, 3, 1)); 

console.log("smallestOfThree2(1, 5, -3)",smallestOfThree2(1, 5, -3)); 
console.log("smallestOfThree2(1, -35, 3)", smallestOfThree2(1, -35, 3)); 
console.log("smallestOfThree2(13, 75, 399)", smallestOfThree2(13, 75, 399)); 
console.log("smallestOfThree2(-1, -6, 9)", smallestOfThree2(-1, -6, 9)); 
console.log("smallestOfThree2(3, 3, 3)", smallestOfThree2(3, 3, 3)); 
console.log("smallestOfThree2(3, 3, 1)", smallestOfThree2(3, 3, 1)); 

console.log("smallestOfThree3(1, 5, -3)",smallestOfThree3(1, 5, -3)); 
console.log("smallestOfThree3(1, -35, 3)", smallestOfThree3(1, -35, 3)); 
console.log("smallestOfThree3(13, 75, 399)", smallestOfThree3(13, 75, 399)); 
console.log("smallestOfThree3(-1, -6, 9)", smallestOfThree3(-1, -6, 9)); 
console.log("smallestOfThree3(3, 3, 3)", smallestOfThree3(3, 3, 3)); 
console.log("smallestOfThree3(3, 3, 1)", smallestOfThree3(3, 3, 1)); 