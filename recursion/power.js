function powerCalc(base,exponenet){

  if(exponenet==0) return 1;

  return base*powerCalc(base,exponenet-1)

};

console.log(powerCalc(2,3))