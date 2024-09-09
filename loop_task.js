// loop task by using while loop========================
let count = 1;
while(count <= 60){
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    count++;
}
console.log("=======================================");
// Find all the odd numbers from 61 to 100.========

let num = 61;
while(num <= 100){
    if(num % 2 !== 0){
        console.log(num);
    }
    num++;
}

console.log("=======================================");

// Find all the even numbers from 78 to 98.================
let number = 78;
while(number <= 98){
    if(number % 2 === 0){
        console.log(number);
    }
    number++;
}

console.log("=======================================");

// Display sum of all the odd numbers from 81 to 131.=============


let sumOdd = 0;
let x = 81;
while(x <= 131){
    if(x % 2 !== 0){
    sumOdd += x;
}
x++;
}
console.log("sum of all odd number from 81 to 131 :", sumOdd);

console.log("=======================================");

// Display sum of all the even numbers from 206 to 311.===============

let sumEven = 0;
let y = 206;
while(y <= 311){
    if(y % 2 === 0){
        sumEven += y;
    }
    y++;
}
console.log("sum of all even number from 206 to 311 :", sumEven);

console.log("=======================================");

// table of 5=============================

let value = 1;
while(value <= 10){
        console.log(`5 * ${value} = ` , 5 * value);

    value++;
}

console.log("=======================================");
// Implement a countdown timer that counts down from 21 to 15.==========
 let time = 21;
 while(time >= 15){
    console.log(time);
    time--;
 }

