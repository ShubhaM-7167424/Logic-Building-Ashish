let arr = [-881, 2, -73, 4, 5, -1186, 7, 8, -89, -8910];

function smallestNumberInAnArray(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(smallestNumberInAnArray(arr));
