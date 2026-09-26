let inputName = "Adriano Felix"; 

console.log(
    inputName.slice(0, 1).toLowerCase() +
    inputName.slice(1, 8) +
    inputName.slice(8, 9).toLowerCase() +
    inputName.slice(9, 13)
);

console.log("*********")

inputName = "Adriano de Casa de Escola de Amigo";

console.log(
    inputName.split(" ")[6]
);

console.log("*********")

let lower = "falaro" // Primeira letra uppercase
let lower2 = "opa, eu" // Duas primeiras letras uppercase
let upper = "FALARO" // Lowercase
let upper2 = "OPA, EU" // Transforma para lower case, as duas primeiras letras em uppercase
let upper3 = "OPA, EU" // Transforma para lower case as primeiras letras.

console.log(
    lower.slice(0, 1).toUpperCase() +
    lower.slice(1, 6)
); //Falaro

console.log(
    lower2.slice(0, 1).toUpperCase() +
    lower2.slice(1, 5) +
    lower2.slice(5, 6).toUpperCase() +
    lower2.slice(6, 8)
); // Opa Eu

console.log(
    upper.toLowerCase()
); //falaro

console.log(
    upper2.slice(0, 1) +
    upper2.slice(1, 5).toLowerCase() +
    upper2.slice(5, 6) +
    upper2.slice(6, 8).toLowerCase()
); // OPA, EU > Opa, Eu

let input = "OlÁ, MeU NOme é AdRiaNo";
lower = input.toLowerCase()
bagunça = lower.split(" ")


console.log(
    bagunça[1].slice(0, 1).toUpperCase() + bagunça[1].slice(1, 4)
);
