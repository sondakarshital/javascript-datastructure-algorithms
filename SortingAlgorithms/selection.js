function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    swap(array, i, min);
  }
  return array;
}

function swap(array, index1, index2) {
  //ES6 way of swapping the values.
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

var array = [1, 2, 3, 18, 4, 5, 6, -1];

let result = selectionSort(array);
console.log(result);
