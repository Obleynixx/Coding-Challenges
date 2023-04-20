function digPow(n, p){
    let elements = n.toString();
    let digitsArray = elements.split("").map(Number);
     let calculatedResult = 0;
    for (i=0; i < digitsArray.length; i++){
     calculatedResult += digitsArray[i]**(p+i);
    }
    let result = calculatedResult/n;
    if (Number.isInteger(result)){
      return result;
    }else {
      return -1;
    }
  }