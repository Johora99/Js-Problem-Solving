const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const rev_array = [];
for(let color of colors){
    rev_array.unshift(color);
}
console.log(rev_array);


// =======================================

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNum = [];
for(let number of numbers){
    if (number % 2 === 0){
       evenNum.push(number);
    }
}
console.log(evenNum);

// =====================================

var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = "";
for(let name of names){
    result += name;
}
console.log(result);


// ============================================

const statement = 'I am a hard working person';
let rever_line = '';
for(let value of statement){
    rever_line = value + rever_line;
}
console.log(rever_line);


let values = statement.split(' ');
const rev_value = [];
for (let value of values){
    rev_value.unshift(value);
}
console.log(rev_value.join(" "));