function countCharacter(str) {
    str = str.toLowerCase()
    let result={}

    for(let i=0; i<str.length; i++){
       
        if(!result[str[i]]){
            result[str[i]]=0
        }
        result[str[i]] += 1;
    }
    return result;
}
console.log(countCharacter('Shubham singh'));

