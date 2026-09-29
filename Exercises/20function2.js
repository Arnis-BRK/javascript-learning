function caracter(a){
    let nome = a.charAt(0).toLowerCase()
    if (nome === "a"){
        return "Nome com A"
    }else{
        return "Nome sem A"
    }
}

// let verify = caracter("Adriano")
// console.log(verify)

function analisarNome(a){
    let nome = a.slice(0, 1).toUpperCase() + a.slice(1).toLowerCase()
    let pLetra = nome.charAt(0)
    if (pLetra === 'A'){
        return "O nome " + nome + " Começa com A e tem " + nome.length +" Caracteres."
    }else{
        return "Nome não começa com A"
    }
}

// let check = analisarNome("adriano")
// console.log(check)


