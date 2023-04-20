function findOdd(A) {
    // first we define an array with no repetition
    let uniqueArray = [...new Set(A)];
    //we then loop through this array to check if any of them meet the conditions
    for (i = 0; i < uniqueArray.length; i++) {
        //we then check to see how many times the same number appear in the original list with the repeated numbers
        let occurrences = 0;
        for (x = 0; x < A.length; x++) {
            if (A[x] == uniqueArray[i]) {
                occurrences++;
            }
        }
        //we get the occurrency and check if it is odd
        if (IsItOdd(occurrences)) {
            //we then retrieve the first value that is odd
            return uniqueArray[i];
        }
    }
    //if none of them are odd we return a value that defines no odds where found -1
    return -1;
}
//Calculate to if it is odd or not
function IsItOdd(lenght) {
    //we use Number.isInteger to check if it is odd or not dividing it by two if it is not an integer it is odd
    if (Number.isInteger(lenght / 2)) {
        return false;
    } else {
        return true;
    }
}
console.log(findOdd([1, 1, 2, 2, 3, 3, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6]))
console.log(findOdd([1, 1, 2, 2, 3, 3, 4, 4, 6, 2, 2, 3, 6, 6, 6, 6, 6, 4]))