let preço = 5
let preço2 = 2
let preço3 = 3

if(preço === preço2 && preço2 === preço3){
    console.log("Todos os produtos tem o mesmo preço. Compre qualquer um.")
}else if(preço === preço2 || preço2 === preço3 || preço === preço3){
    console.log("Tem dois produtos com valores iguais, compre qualquer um dos dois.")
}else{
    if(preço < preço2 && preço < preço3){
        console.log("O primeiro é o mais barato, custando R$", preço)
    }else if(preço2 < preço && preço2 < preço3){
        console.log("O segundo é o mais barato, custando R$", preço2)
    }else{
        console.log("O terceiro é o mais barato, custando R$", preço3)
    }
}