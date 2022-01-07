
//Convert Minutes into Seconds with prompt

function convertMinToSec(input){
   let result = input * 60;
   return result;
}

let minToSec = parseInt(prompt("Enter number of minutes you want to convert into seconds"));

   if (!Number.isNaN(minToSec)) {
      result = convertMinToSec(minToSec);
      console.log(result);
   } else {
      console.log("Your input is not valid");
   }

// Convert Minutes into Seconds without prompt

function convertMinToSec1(input1){
   let conversion = input1 * 60;

   if (isNaN(input1)) {
      result = "Please eneter a number to make conversion";
      console.log(result)
      return result;

   } else {
      result = `${input1} minutes equal to ${conversion} seconds`;
      console.log(result);
      return result;
   
   } 
}

convertMinToSec1(5);
convertMinToSec1(3);
convertMinToSec1(2);
convertMinToSec1();
