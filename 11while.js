// while (condition)
// do-while loop:
// do{
//  code to be executed
//}while(condition)

// while:
// VERIFY → execute → verify → execute...

// do-while:
// execute → VERIFY → execute → verify...

/*
infinite loop

var x = 1;
while(x<=5){
    console.log(x);
}



var x = 1;
while(x<=5){
    console.log(x);
    x++
}

while(x<=50){
    if(x%2===0){
        console.log(x);
    }
    x++;
}

*/

var x = 10;

do{
    console.log(x);
    x++
}while(x<=15);