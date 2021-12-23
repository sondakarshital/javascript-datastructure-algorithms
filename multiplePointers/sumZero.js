//Find the first pair of no which sums to zero in an array
//Soltion1
//O(N**2) complexity
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero1([-4, -3, -2, -1, 0, 1, 2, 3]));

//Soltion2 - O(N) complexity

function sumZero1(arr){
let left = 0;
let right = arr.length-1;

while(left<right){
  let sum = arr[left]+arr[right];
  if(sum==0){
    return [arr[left],arr[right]]
  }else if(sum>0){
    right--
  }else{
    left++
  }
}

}


