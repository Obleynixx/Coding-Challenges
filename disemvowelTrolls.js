/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.*/
function disemvowel(str) {
    //Set the default vowels
    let vowels = ["a","i","u","e","o"]
    //Split the string into characters and filter out the vowels
    let result = str.split("").filter(function(value) {
     return !vowels.includes(value.toLowerCase());
    });
    //return the result joined as a string
    return result.join("");
  }
  console.log(disemvowel("This website is for losers LOL!"));
  console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
  console.log(disemvowel("What are you, a communist?"));