function smallestOfThree(a, b, c) {
    if(a > b && a > c){
        if(b > c){
            console.log('smallest of three is ', c);
        }else{
            console.log("smallest of three is ", b);
        }
    }
}