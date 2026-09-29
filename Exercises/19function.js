// function calcdouble(a){
//     return a * 2;
// }

// let resultado = calcdouble(8)
// console.log(resultado);

// function calcMedia(a, b, c){
//     return (a + b + c) / 3;
// }

// let media = calcMedia(7, 8, 9);
// console.log(media);

// function calcDesconto(a, b){
//     return a - (a * (b / 100)) 
// }

// let valorFinal = calcDesconto(100, 20);

// console.log(valorFinal);

// function idade(a){
//     if (a >= 18){
//         return "Maior de idade"
//     }else{
//         return "Menor de idade."
//     }
// }

// let p1 = idade(18)
// let p2 = idade(15)
// let p3 = idade(5)


// console.log(p1, p2, p3)

// function salario(a, b){
//     if (b < 0){
//         return a
//     }else if(b > 10){
//         let conta = ((b - 10) * 30) + 200;
//         return a + conta;
//     }else{
//         let conta =  b * 20;
//         return a + conta;
//     }
        
// }

// let salarioreal = salario(2000, 12);
// console.log(salarioreal);

function caracter(a){
    let nome = a.charAt(0).toLowerCase()
    if (nome === "a"){
        return "Nome com A"
    }else{
        return "Nome sem A"
    }
}

let verify = caracter("Adriano")
console.log(verify)

