
/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
    //set new array to A
    let newArray = a;
    //Loop through all of b elements
    for (i = 0;i < b.length;i++){
      //filter new array for each b element
      newArray = newArray.filter(function(value){
        return value !== b[i];
      });
    }
    return newArray;
  }
  console.log(arrayDiff([1,2], [1]));
  console.log(arrayDiff([1,2,2], [1]));
  console.log(arrayDiff([1,2,2], [2]));
  console.log(arrayDiff([1,2,2], []));
  console.log(arrayDiff([], [1,2]));
  console.log(arrayDiff([1,2,3], [1,2]));