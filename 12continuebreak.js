// break: used to exit a loop or swtich statement
// continue: used to skip the current iteration abd move to the next

for(var i=1;i<=11;i++){
    if(i==4 || i == 2 || i == 6)
        continue;
    console.log("test", i)
    if(i==10){
        break
    }
}

