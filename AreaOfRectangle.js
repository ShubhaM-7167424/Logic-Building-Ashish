function AreaOfRectangle( height, width ) {
    if(height < 0){
        throw RangeError('height must be greater than 0')
    }
    if(width < 0){
        throw RangeError('width must be greater than 0')
    }
    return height * width;
}

console.log(AreaOfRectangle(10, 20));
console.log(AreaOfRectangle(-10, 20));
console.log(AreaOfRectangle(10, -20));


