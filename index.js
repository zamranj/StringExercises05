let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
let concat = language.slice(0,1)+language.slice(4,5);
console.log(concat+"\n");

//b) Without using .slice(), use method chaining to accomplish the same thing.
console.log(language.substring(0,1)+language.substring(4,5),"\n")


//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for \'JavaScript'\ is ${concat}`+"\n");

//d) Just for fun, try chaining 3 or more methods together, and then print the result.

console.log(language.toUpperCase().replace("a","@").includes("t"));