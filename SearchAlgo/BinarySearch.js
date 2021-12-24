function binaryrSearch(arr, elm) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elm && start <= end) {
    if (elm > arr[middle]) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elm ? middle : -1;
}

console.log(binaryrSearch([3, 2, 10, 34, 78, 79], 80));
