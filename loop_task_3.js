let number = 1;
while(number <= 40){
    number++;
    if(number % 2 !== 0){
        continue;
    }
    console.log(number);
}

console.log("=======================================");

for(i = 1; i <= 40; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(i);
}


console.log("=======================================");

// display odd number from 55 to 85 and skip the numbers divisible by 5.====================

for(i = 55; i <= 85; i++){
    if (i % 2 === 0 || i % 5 === 0){
        continue;
    
    }
    console.log(i);
}