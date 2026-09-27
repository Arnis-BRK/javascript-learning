let peixekg = 100;


if(peixekg > 50){
    let excesso = peixekg - 50;
    let multa = excesso * 4;
    console.log("Você excede o limite de 50 kg por",excesso,"Kg. Uma multa de 4$ será aplicada para cada KG excedente totalizando R$", multa);
}else{
    console.log("O peixe está dentro do limite de 50 Kg, está tudo certo.");
}
