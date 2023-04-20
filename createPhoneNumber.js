function createPhoneNumber(numbers){
    //not the most elegant way to make it work i should probably use a regular expression
    return "("+numbers[0]+numbers[1]+numbers[2]+") "+ numbers[3]+numbers[4]+numbers[5]+"-"+numbers[6]+numbers[7]+numbers[8]+numbers[9];
  }
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
  console.log(createPhoneNumber([0, 1, 1, 9, 1, 1, 1, 1, 1, 1]));
  console.log(createPhoneNumber([0, 1, 1, 9, 9, 6, 7, 8, 9, 0]));
  