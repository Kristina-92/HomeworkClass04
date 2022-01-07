
// The Farm Problem

function animals(chickens, cows, pigs){
    let chickenLegs = 2;
    let cowsLegs = 4;
    let pigsLegs = 4;
    let numberOflegs = (chickens * chickenLegs) + (cows * cowsLegs) + (pigs * pigsLegs);
    return numberOflegs;
}

console.log(`Among 2 chickens, 3 cows and 5 pigs, a subtotal of ${animals(2, 3, 5)} legs can be counted`);
console.log(`Among 1 chicken, 2 cows and 3 pigs, a subtotal of ${animals(1, 2, 3)} legs can be counted`);
console.log(`Among 5 chickens, 2 cows and 8 pigs, a subtotal of ${animals(5, 2, 8)} legs can be counted`);


