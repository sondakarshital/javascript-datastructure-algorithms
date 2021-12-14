function charecterCount(str){
//create empty object to return response with key and value
    //Check the char is alphanuemric
    let obj = {};

    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>47 && str.charCodeAt(i)<58 ||
        str.charCodeAt(i)>64 && str.charCodeAt(i)<91 ||
        str.charCodeAt(i)>96 && str.charCodeAt(i)<123
        ){
            let lowerCaseValue = str[i].toLowerCase()
            obj.hasOwnProperty(lowerCaseValue) ? obj[lowerCaseValue] = obj[lowerCaseValue] +1 : obj[lowerCaseValue] = 1;
        }
    }
    return obj;


};

console.log(charecterCount('S123hitalSs'))
