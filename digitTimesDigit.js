/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)*/

function squareDigits(num){
    //set the numbers to a string array
    let arr = num.toString();
    let result = [];
    //go through each character
    for (i = 0;i < arr.length;i++){
      //push the resulting value of the character power of 2 into an array
      result.push(parseInt(arr[i])**2);
        
    }
    //return the array as an integer
    return parseInt(result.join(""));
  }

  console.log(squareDigits(3212) + ": 3212");
  console.log(squareDigits(2112) + ": 2112");
  console.log(squareDigits(0) + ": 0");