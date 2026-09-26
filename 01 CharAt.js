/*

Acess string methods

Every character in the string has index starting from 0. So, 
A is at index 0, d is at index 1, r is at index 2 and so on.

Adriano
0123456

//get 5th character from the string, CharAt is the method.
*/

let inputName = "Adriano"; 
console.log(inputName.charAt(4)); 

// Case sensitive, so Adriano and adriano are different strings.
// a == A is false, but a == a is true.

let name1 = "Adriano";
let name2 = "adriano";

console.log(name1 == name2);

