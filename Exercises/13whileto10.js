n = 1
while (n <= 2){
    console.log(n)
    n++
}

while (n <= 4){
    if(n % 2 === 0){
        console.log(n)
    }
    n++
}

while (n <= 21){
    if(n === 7 || n === 15){
        n++;
        continue;
    }
    if(n % 2 === 1){
    console.log(n)
    }
    n++
}

while (n <= 40){
    if(n % 5 === 0){
    console.log(n)
    }
    n++
}