// loop task by using for loop=======================

for(i = 1; i <= 60; i++){
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
}

// Find all the odd numbers from 61 to 100.==============

console.log("=======================================");

for(i = 61; i <= 100; i = i + 2){
    console.log(i);

}
console.log("=======================================");

// Find all the even numbers from 78 to 98.==================

for(i = 78; i <= 98; i++){
  if(i % 2 === 0){
    console.log(i);
  }
}

console.log("=======================================");

// Display sum of all the odd numbers from 91 to 129.=================
let sumOdd = 0;
for(i = 91; i <= 129; i++){
    if(i % 2 !== 0){
        sumOdd += i;
    }
}
console.log("sum of all the odd numbers from 91 to 129 :", sumOdd);

console.log("=======================================");

// Display sum of all the even numbers from 51 to 85.===============


let sumEven = 0;
for(i = 50; i <= 85; i = i + 2){
    sumEven += i;
}
console.log("sum of all the even numbers from 51 to 85 :", sumEven);

console.log("=======================================");

// table of 9================================

for(i = 1; i <= 10; i++){
    console.log(`9 * ${i} = `, 9 * i);
}
console.log("=======================================");

// Implement a countdown timer that counts down from 81 to 65.

for(i = 81 ; i >= 65; i--){
    console.log(i);
}

