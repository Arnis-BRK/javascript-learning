let name3 = "Adriano";
let name4 = " Felix";
let name5 = " Adriano Felix ";

let name6 = 123;
let concatenation = String(name6); // if not converted to string, it will throw an error as concat() method is 
// only applicable to strings.


console.log(concatenation.concat(' ', name3));
console.log(name3.concat(' ', name4));
console.log(name3.replace("A", "P"));
console.log(name3.toLowerCase());
console.log(name3.toUpperCase());
console.log(name5.trim());
console.log(name5.split(" "));
console.log(name3.slice(0, 3));  
console.log(name1.length)

let numero = String(1234);
console.log(typeof numero)

numero = Number(numero);
console.log(typeof numero)

// Concat > Concatenation of strings, joining two strings together.
// replace > Replace a character in the string with another character.
// toLowercase() > converting the string to lowercase
// to Uppercase() > converting the string to uppercase
// trim() > removes the spaces from the start/end of the string
// split() > splits the string into an array of strings based on the separator provided.
// slice() > returns a part of the string based on the start and end index provided.
// substring() > returns a part of the string based on the start and end index provided. It is similar to slice() 
// but it does not accept negative indexes.
