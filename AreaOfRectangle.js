function areaOfRectangle(length, width) {
    if(length < 0 ){
        throw new RangeError('length should be a positive number');
    }
    if(width < 0){
        throw new RangeError('width should be a positive number');
    }
    const area = length * width;
    console.log('areaOfRectangle ', area);
}

console.log(areaOfRectangle(2, 5));
console.log(areaOfRectangle(2.5, 5));
// console.log(areaOfRectangle(-2, 5));
console.log(areaOfRectangle(2.5, -5));