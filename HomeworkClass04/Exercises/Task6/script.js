
//Compare Strings by Count of Characters

function stringComparison(str1, str2){
    if (str1.length === str2.length){
        return true;
    } else {
        return false;
    }
}

console.log(`Compare ("AB", "CD"): ${stringComparison("AB", "CD")}`);
console.log(`Compare ("ABC", "DE"): ${stringComparison("ABC", "DE")}`);
console.log(`Compere ("hello", "sedc"): ${stringComparison("hello", "sedc")}`);
console.log(`Compare ("yes", "no"): ${stringComparison("yes", "no")}`);
console.log(`Compare ("truthy", "falsey"): ${stringComparison("truthy", "falsey")}`);