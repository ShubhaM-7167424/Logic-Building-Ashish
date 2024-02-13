function average(arr) {
  let average;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  average = sum / arr.length;
  return average;
}

let arr = [1, 2, 3, 5];
console.log(average(arr));
