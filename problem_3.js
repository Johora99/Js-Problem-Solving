// sum of odd numbers 1-20===============

let sumOdd = 0;
let num = 1;
while(num < 20){
    if(num % 2 !== 0){
        sumOdd += num;
    }
    num++;
}
console.log(sumOdd);


let sumOdd2 = 0;
for (i = 1; i <20; i++){
    if (i % 2 !==0){
        sumOdd2 += i;
    }
}
console.log(sumOdd2);

// sum of even number 1-20=================

let sumEven = 0;
let number = 2;
while(number < 20){
    if (number % 2 ===0){
        sumEven += number;
    }
    number++;
}
console.log(sumEven);

let sumEven2 = 0;

for(number = 2; number < 20; number++){
    if ( number % 2 ===0){
        sumEven2 += number;
    }
    
}
console.log(sumEven2);