function bubbleSort(arr) {
  var noSwap;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    //if no swaps then the array is sorted and dont want to sort any further
    if (noSwap) break;
  }
  return arr;
}

function swap(arr, index1, index2) {
  //ES6 way of swapping the values.
  [a[index1], arr[index2]] = [arr[index2], arr[index1]];
}

var arr = [1, 2, 3, 18, 4, 5, 6];

let result = bubbleSort(arr);
console.log(result);
