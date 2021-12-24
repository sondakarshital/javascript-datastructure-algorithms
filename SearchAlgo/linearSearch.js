//function takes array and search value.if found return the index else return -1;
//O(N) complexity

function linerSearch(array, num) {
  if (array.length == 0) return -1;

  for (let index = 0; index < array.length; index++) {
    if (array[index] == num) return index;
  }
  return -1;
}

console.log(linerSearch([1, 3, 4, 6, 8, 10, -2, -1], 1));
