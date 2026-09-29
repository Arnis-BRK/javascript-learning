
//Input: Write the employee first and last name. Any other input will be invalid and shown only the two first phrases.
function formatarNome(a){
    if (typeof a !== "string"){ // Se a não for uma string
        return "Invalid: It's not text.";
    }
    let nome = a.split(" ");

    if (nome.length < 2){ // Length checando Array faz uma contagem
        return "Invalid: It need a name and surname."
    }

    let normalizacao = 
    nome[0].slice(0, 1).toUpperCase() + nome[0].slice(1).toLowerCase() +
    ' ' +
    nome[1].slice(0, 1).toUpperCase() + nome[1].slice(1).toLowerCase();
    return normalizacao;

}

function checarVinculo(a){
    if (typeof a !== "number") // A is not a number
        return "Invalid: It's not a number.";
    if (a <= 14){
        return "Invalid Age";
    }else if(a < 18){
        return "Part Time";
    }else{
        return "Regular Employee";
    }
}

function departamento(a){
    if (typeof a !== "string"){
        return "Invalid department."
    }
    let dept = a.slice(0, 1).toUpperCase() + a.slice(1).toLowerCase();
    if (dept === "Desenvolvedor"){
        return dept + ' ' + "\nÁrea: Tecnologia"
    }else if (dept === "Vendedor"){
        return dept + ' ' + "\nÁrea: Comercial"
    }else{
        return dept + ' ' + "\nÁrea: Gestão"
    }
}

function salario(a){
    if (typeof a !== "number"){
        return "Not a number."
    }
    if (a < 1500){
        return a + ' ' + "\nFaixa: Inicial"
    }else if(a < 3000){
        return a + ' ' + "\nFaixa: Intermediária"
    }else{
        return a + ' ' + "\nFaixa: Alta" 
    }
}

let idade = (Math.floor(Math.random() * 26)) // Make the calculus and simulate an input
let vinculo = checarVinculo(idade) // put the generated number and calls the function, simulating the program

if (idade <= 14){ 
    console.log("Invalid age:", idade);

}else{
    let employees = [
        "aDRiAnO fElIx", "bRuNo sILvA", "cArLoS sOuZa", "dAnIeL mArTiNs", 
        "fErNaNdO cOsTa", "gAbRiEl aLmEiDa", "lUcAs pErEiRa", "mAtHeUs rOcHa", 
        "rAfAeL bArBoSa", "vInIcIuS mEnDeS"];
    let lucky = employees[Math.floor(Math.random() * employees.length)];
    let nome = formatarNome(lucky);

    let depts = ["dEsenVolvedor", "vEnDedOr", "gErenTE"]
    let lucky2 = depts[Math.floor(Math.random() * depts.length)]
    let job = departamento(lucky2)

    let valor = (Math.floor(Math.random() * 5000))
    let pg = salario(valor) 

    console.log(
        "Nome:", nome,
        "\nIdade:", idade,
        "\nVinculo:", vinculo,
        "\nDepartamento:", job,
        "\nSalário:", pg
    );
}


