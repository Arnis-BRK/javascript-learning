let n1 = 10;
let n2 = 11;
let n3 = 11;

if(n1 === n2 && n2 === n3){
    console.log("Todos tem o mesmo valor.");
}else if(n2 === n3){
    if(n1 < n2 && n1 < n3){
        console.log(n2, n3, n1)
    }else{
        console.log(n1, n2, n3);
    }

}else if(n3 === n1){
    if(n2 < n3 && n2 < n1){
        console.log(n1, n3, n2);
    }else{
        console.log(n2, n1, n3)
    }

}else if(n2 === n1){
    if(n3 < n2 && n3 < n1){
        console.log(n1, n2, n3)
    }else{
        console.log(n3, n2, n1)
    }
}else if(n1 > n2 && n1 > n3){
    if(n2 > n3){
        console.log(n1, n2, n3)
    }else{
        console.log(n1, n3, n2)
    }
}else if(n2 > n1 && n2 > n3){
    if(n1>n3){
        console.log(n2, n1, n3)
    }else{
        console.log(n2, n3, n1)
    }
}else if(n3 > n1 && n3 > n2){
    if(n1 > n2){
        console.log(n3, n1, n2)
    }else{
        console.log(n3, n2, n1)
    }
}

console.log("*****************")

let numeros = [n1, n2, n3];
console.log(numeros.sort((a, b) => b - a));
