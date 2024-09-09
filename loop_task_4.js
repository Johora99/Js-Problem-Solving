// Write a loop 1 to 200. Use break to exit the loop once you find 100.============


for(let i = 1; i <= 200; i++){
    console.log(i);
  if(i === 100){
    break;
  }
}

console.log("=======================================");

let i = 1;
let sum = 0;
while(i <= 200){
    sum += i;
    if(sum >= 101){
        break;
    }
    console.log(sum);
    i++;
}
console.log("=======================================");


for(i = 1; i <= 100; i++){
    if(Number.isInteger(Math.sqrt(i)) && i !==1 ){
        break;
    }
    console.log(i);
}