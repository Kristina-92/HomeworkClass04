
// Case Insensitive Comparison

function match(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()){
    return true; 
} else {
    return false;
}
}

console.log(`match("hello", "hELLo"): ${match("hello", "hELLo")}`);
console.log(`match("motive", "emotive"): ${match("motive", "emotive")}`);
console.log(`match("venom", "VENOM"): ${match("venom", "VENOM")}`);
console.log(`match("mask", "mAskinG"): ${match("mask", "mAskinG")}`);
console.log(`match("football", "FOOTBALL"): ${match("football", "FOOTBALL")}`);
