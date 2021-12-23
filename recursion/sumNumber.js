//function logs the no's in descending order based on input n;

function countDown(num) {
 if(num==0) return 1;
  return num+countDown(num-1);
}

console.log(countDown(5));
