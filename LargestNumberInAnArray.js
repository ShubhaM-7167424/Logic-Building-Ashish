const arr = [183, 92, 38392, 40, 592, 6, 7783, 892, 9, 10];

function findLargestInAnArray(arr) {
  console.log(arr);
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestInAnArray(arr));
