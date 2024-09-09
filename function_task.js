const numbers = [23, 45, 50 , 32];
function myFunction(){
    let sum = 0;
    for(let number of numbers){
       sum += number;
    }
    return sum;
}
let result = myFunction(numbers);
console.log(result);


// ===============================

const values = [2, 15, 23, 20, 7, 15, 32];
function evenNumber(evenValue){
    const even = [];
    for(let value of evenValue){
        if(value % 2 === 0){
             even.push(value);
        }
       

    }
    return even;
    
}
let even_result = evenNumber(values);
console.log(even_result);

// ==========================================

function myCal(num1, num2, num3, num4){
    multiply_result = num1 * num2 * num3 * num4;
    return multiply_result;
}

let product = myCal(2, 3, 4, 5);
console.log(product);

// =========================================

function oddEven(number){
    if(number % 2 === 0){
        let value = number / 2;
        return value;
    }
    if(number % 2 !== 0){
        let value = number * 2;
        return value;
    }
}
let final_result1 = oddEven(22);
let final_result2 = oddEven(11);
console.log(final_result1);
console.log(final_result2);

// ===========================================

const arr = [12, 20, 15, 30, 6];
function make_avg(array){
    let sum = 0;
  for(let value of arr){
      sum += value;
  }
  let size = arr.length;
  let average = sum / size;
  return average;

}
let Average = make_avg(arr);
console.log(Average);

// ===========================================

const bainary_value = [1, 0, 0, 1, 1, 1, 0, 0,1];
function count_zero(){
    const zero = [];
    for(let value of bainary_value){
        if(value === 0){
         zero.push(value);
        }
    }
    let count = zero.length;
    return count;
}
let zero_result = count_zero(bainary_value);
console.log(zero_result);

// ==========================================
function odd_even(num){
    if(num % 2 === 0){
        let Even = "Even";
        return Even;
    }
    if(num % 2 !== 0){
        let Odd = "Odd";
        return Odd;
    }

}
let Odd_Even1 = odd_even(22);
let Odd_Even2 = odd_even(23);
console.log(Odd_Even1);
console.log(Odd_Even2);

