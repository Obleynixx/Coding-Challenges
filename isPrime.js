function isPrime(num) {
    if (num === 2) return true;
    if (num < 2||Number.isInteger(num/2)) return false;
    let sqRt = Math.floor(Math.sqrt(num));
    for (i=3;i <= sqRt;i+= 2 ){
      if (num%i ===0){
        return false;
      }
      
    }
    return true;
  }
  console.log(isPrime(27) + ": 27");
  console.log(isPrime(4)+ ": 4");
  console.log(isPrime(7)+ ": 7");
  console.log(isPrime(127)+ ": 127");
  console.log(isPrime(123)+ ": 123");
  console.log(isPrime(843)+ ": 843");