// give me the sum of 1 to 30 those are divisible by 5

// let sum = 0;
// for(let i = 1; i <= 30; i++){
//     if(i % 5 === 0){
//        sum += i;
//     }
// }
// console.log(sum);
// let sum = 0;
// for(let i = 1; i <= 30; i++){
//     if(i % 5 === 0 || i % 3 === 0){
//        sum += i;
//        console.log(i);
//     }
// }
// console.log(sum);
let sum = 0;
for(let i = 1; i <= 30; i++){
    if(i % 5 === 0 && i % 3 === 0){
       sum += i;
       console.log(i);
    }
}
console.log(sum);