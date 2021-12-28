//left half will always be sorted
//find the perfect slot to place the current value in left half sorted place

function insertionSort(array) {
  var currentVal;

  for (var i = 1; i < array.length; i++) {
    currentVal = array[i];
    for (var j = i - 1; j < array.length && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return array;
}

console.log(insertionSort([2, 1, 9, 76, 4, 0]));
