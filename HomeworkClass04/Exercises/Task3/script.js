// Convert Hours into Seconds

function howManySeconds(input){
    let convertHrsToSec = input * 3600;

    if (isNaN(input)) {
        result = "Enter a number to make the conversion";
        console.log(result);
        return result;
    
    } else {
        result = `${input} minutes equal to ${convertHrsToSec} seconds`;
        console.log(result);
        return result;
   
    } 
}

howManySeconds(2);
howManySeconds(10);
howManySeconds(24);
howManySeconds(12);
howManySeconds("number");
howManySeconds();
