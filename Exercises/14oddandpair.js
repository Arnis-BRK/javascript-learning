let v = 1;

while(v<=30){
    if(v % 2 === 1){
        console.log(v, "É ímpar.");
        if(v === 21){
            break;
        }
    }else{
        console.log(v, "É par.");
    }
    v++;
}