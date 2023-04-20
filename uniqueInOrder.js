var uniqueInOrder=function(iterable){
    let arr;
    let resultArr = [];
    for (i=0;i<=iterable.length;i++){
      if (arr === undefined){
        arr = iterable[i];
      }else {
        if (arr !== iterable[i]){
           resultArr.push(arr);
          arr = iterable[i];
        }
      }
    }
    return resultArr;
  }
  console.log(uniqueInOrder('AAAABBBCCDAABBB'));
  console.log(uniqueInOrder('ABBCcAD'));
  console.log(uniqueInOrder([1,2,2,3,3]));