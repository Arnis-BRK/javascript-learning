let n1 = 4;
let n2 = 1;
let n3 = 3;

if (n1 === n2 && n2 === n3) {
    console.log("Os três são iguais.");
} else if (n1 === n2 || n1 === n3 || n2 === n3) {
    console.log("Tem empate entre alguns valores.");

} else {
    if(n1 > n2 && n1 > n3){
        if(n3 > n2){
            console.log(n1, "É o maior.", n2, "É o menor.");
        }else{
        console.log(n1, "É o maior.", n3, "É o menor.");
    }
    
}else if(n2 > n1 && n2 > n3){
    if(n3 > n1){
        console.log(n2, "É o maior.", n1, "É o menor.");
    }else{
        console.log(n2, "É o maior.", n3, "É o menor.");
    }

}else if (n3 > n1 && n3 > n2){
    if(n1 > n2){
        console.log(n3, "É o maior.", n2, "É o menor.");
    }else{
    console.log(n3, "É o maior.", n1, "É o menor.")
    }

}
}


