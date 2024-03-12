function findSmallestWord(str) {
    let words = str.split(' ')
    let smallestWord = words[0]
    let smallestLength = words[0].length

    for(let i=1; i<words.length; i++){
        if(words[i].length < smallestLength){
            smallestLength = words[i].length;
            smallestWord = words[i]
        }
    }
    
    return {smallestWord, smallestLength}
}

console.log(findSmallestWord('tvs radier and an a'));
console.log(findSmallestWord('raider apache sport'));