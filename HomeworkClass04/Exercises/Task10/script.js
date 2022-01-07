
// Truthy or Falsy?

function isTruthy(input) {
    if (input === false || !input === null || input === undefined || input === 0 || !input === !NaN || input === ""){
        return 0;
    } else {
        return 1;
    }
}

console.log(`isTruthy(0): ${isTruthy(0)}`);
console.log(`isTruthy(false): ${isTruthy(false)}`);
console.log(`isTruthy(""): ${isTruthy("")}`);
console.log(`isTruthy("false"): ${isTruthy("false")}`);
console.log(`isTruthy(NaN): ${isTruthy(NaN)}`);
