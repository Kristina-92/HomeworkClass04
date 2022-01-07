
// Homework Part 2

function calculateHumantoDogYears(input) {
    let humanToDogYears = input * 7;
    return humanToDogYears;
}

function calculateDogtoHumanYears(input) {
    let dogToHumanYears = input / 7;
    return dogToHumanYears;
}

let userChoice = prompt("Enter 'H' if you want to convert Human to Dog years\nEnter 'D' if you want to convert Dog to Human years");
let inputFromUser = parseInt(prompt("Please enter the age of your dog:"));

if (userChoice === "H" && !Number.isNaN(inputFromUser)) {
    let result = calculateHumantoDogYears(inputFromUser);
    console.log(`Your dog is ${result} years old in Dog years`);

} else if (userChoice === "D" && !Number.isNaN(inputFromUser)) {
    let result = calculateDogtoHumanYears(inputFromUser);
    console.log(`Your dog is ${result} years old in Human years`);

} else {
    console.log("Please enter valid input as requested");
}
