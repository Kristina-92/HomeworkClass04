
// Is the Word Singular or Plural?

function isPlural(word){
    let plural = word.endsWith("s");
   
    if (word = plural) {
        return true;
    } else {
        return false;
    }
}

 console.log(`Is Plural "changes"? => ${isPlural("changes")}`);
 console.log(`Is Plural "change"? => ${isPlural("change")}`);
 console.log(`Is Plural "dudes"? => ${isPlural("dudes")}`);
 console.log(`Is Plural "magic"? => ${isPlural("magic")}`);
 console.log(`Is Plural "changes"? => ${isPlural("lights")}`);