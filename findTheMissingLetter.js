function findMissingLetter(array)
{
  let asciiArray = array.map(str => str.charCodeAt(0));
  for (i=1;i<asciiArray.length;i++){
    if (asciiArray[i] !== asciiArray[i-1] + 1){
      return String.fromCharCode(asciiArray[i -1]+1);
    }
    
  }
}
console.log(findMissingLetter(['a','b','c','d','f','g']));
console.log(findMissingLetter(['M','N','O','Q','R','S']));