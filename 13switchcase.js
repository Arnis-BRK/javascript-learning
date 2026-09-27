/*

switch(variable){
    case value1:
        //logic
        break;
    case value2:
        //logic
        break;
    default:
        logic for other values
}
*/

let dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo", "Feijão", "Arroz", "Farinha"];
let random = dias[Math.floor(Math.random() * dias.length)];

switch(random){
    case "Segunda":
        console.log("Hoje é Segunda Feira.");
        break;
    case "Terça":
        console.log("Hoje é Terça Feira");
        break;
    case "Quarta":
        console.log("Hoje é Quarta Feira.");
        break;
    case "Quinta":
        console.log("Hoje é Quinta Feira");
        break;
    case "Sexta":
        console.log("Hoje é Sexta Feira.");
        break;
    case "Sábado":
        console.log("Hoje é Sábado");
        break;
    case "Domingo":
        console.log("Hoje é Domingo");
        break;
    default:
        console.log("Isso não é um dia válido.");
}