//Solution1 - O(N**2) time complexity
function same1(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

//console.log(same1([2, 2, 3], [4, 4, 9]));

//Solution2 - O(N) complexity - Frequency counter problem

function same2(arr1, arr2) {
  //create 2 objects with the no of charecter occurrances for both arrays
  // Compare the values and no of occurances

  if (arr1.length != arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1){
    if(!(key**2 in frequencyCounter2)){
      return false;
    };
    if(frequencyCounter2[key**2]!==frequencyCounter1[key]) return false;
  }
  return true;
};

console.log(same2([2, 2, 3,4], [4, 4, 9,8]))
