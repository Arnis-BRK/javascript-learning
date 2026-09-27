/*

== → igual em valor
=== → igual em valor e tipo
!= → diferente em valor
!== → diferente em valor ou tipo
> → maior que
< → menor que
>= → maior ou igual
<= → menor ou igual

*/

console.log (10 == "10"); //Os mesmos em valor
console.log (10 === "10"); // Não são os mesmos em tipo. number diferente de String

let age = 20;
let minimumAge = 18;

console.log(age > minimumAge);
console.log(age < minimumAge);
console.log(age >= minimumAge);
console.log(age != minimumAge);