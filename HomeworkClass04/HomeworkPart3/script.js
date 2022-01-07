
// //Homework Part 3

function moneyWitdrawalFromATM(input){
    let availableAccountMoney = 55000;
    let moneyLeftonAccount = availableAccountMoney - input;

    if (input <= availableAccountMoney) {
        let result = `The amount withdrawn from your account is ${input}$. You have ${moneyLeftonAccount}$ left on your Account`;
        console.log(result);
        return result;
    } else {
        let result = "You don't have enough money on your account";
        console.log(result);
        return result;
}
}

moneyWitdrawalFromATM(50000);
moneyWitdrawalFromATM(20000);
moneyWitdrawalFromATM(65000);


//Homework Part 3 (solution with prompt)


function cashAtm() {
    let availableAccountMoney = 55000;
    return availableAccountMoney;
}

let inputAmmountfromUser = parseInt(prompt("Enter the amount of money you want to withdraw from your account"));
let moneyLeftonAccount = cashAtm() - inputAmmountfromUser;
    
    if (inputAmmountfromUser <= cashAtm()) {
        console.log(`The amount withdrawn from your account is ${inputAmmountfromUser}$. You have ${moneyLeftonAccount}$ left on your account`);
    
    } else {
        console.log("You don't have enough money on your account")
    }
