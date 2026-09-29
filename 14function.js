/*

syntax:
function name(){
    //logic
}

function greet(name){
    console.log("Hello " + name + ", Welcome.");
}
greet("Luis");
greet("Tom");
greet("Jobim");

console.log → quero visualizar algo.
return → quero que a função produza um valor que o restante do código possa utilizar.

*/


function VerificarAprovacao(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        return "Aprovado"
    }else {
        return "Reprovado"
    }
}

let aluno1 = VerificarAprovacao(
    Math.floor(Math.random() * 11),
    Math.floor(Math.random() * 11),
    Math.floor(Math.random() * 11)
)
let aluno2 = VerificarAprovacao(
    Math.floor(Math.random() * 11),
    Math.floor(Math.random() * 11),
    Math.floor(Math.random() * 11)
)

let aluno3 = VerificarAprovacao(
    Math.floor(Math.random() * 11),
    Math.floor(Math.random() * 11),
    Math.floor(Math.random() * 11)
)

console.log(aluno1)
console.log(aluno2)
console.log(aluno3)