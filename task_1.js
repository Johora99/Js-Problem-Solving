const name = "Fatima Tuz Johora";
let reverse = "";
for(let letter of name){
    reverse = letter + reverse;
}
console.log(reverse);
let rev = "";
for(i = 0; i<name.length; i++){
    let letter = name[i];
    rev = letter + rev;
  
}
console.log(rev);


const rez = name.split("").reverse().join("");
console.log(rez);



const mobile = {
    brand : "nokia",
    price : 250000,
    color : "black",
    camera : "12mp"
}

for (let prop in mobile){

    console.log((prop +" :" + mobile[prop]));
}

const keys = Object.keys(mobile);
for (let key of keys){
    console.log(key, mobile[key]);
}

// =====================================================

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

let key = colors["golden rod"];
console.log(key);

// ===================================================
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car["passenger capacity"] = 5;

console.log(car);

// ===============================================

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

let value = student.physics.marks;
console.log(value);

// ==================================================

const Student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let count = Object.keys(Student);
let lenght = count.length;
console.log(lenght);

// ================================================

const myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for (let key in myObject){
    console.log("key :", key,"|","type :", typeof myObject[key]);
}
// ================================================


const numbers = [1, 2, 3, 4, 5, 6, 7];
const num_rev = [];
for (let number of numbers){
    num_rev.unshift(number);
}

console.log(num_rev);

const revz = [];
for(i = 0; i < numbers.length; i++ ){
    console.log(numbers[i]);
    revz.unshift(numbers[i]);
}
console.log(revz);


const rev_value = [];
for (i = numbers.length -1; i >=0 ; i--){
    rev_value.push(numbers[i]);
}
console.log(rev_value);

