
// Return the Next Number from the Integer Passed

function inputNumber(i){
    if (isNaN(i)){
        console.log("Your input must be a number");
    
    } else {
        i += 1;
        console.log(i);
        return i;
    }
}

inputNumber()
inputNumber(0);
inputNumber(9);
inputNumber(-3);
inputNumber(25);
inputNumber(-10);

