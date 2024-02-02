"use strict";

// To String

// 1)

console.log(typeof(String(null)));

console.log(typeof(String(4)));

// 2) конкотинация
console.log(typeof((4 + ' ')));


const num = 5;

console.log("htt://vk.com/catalog/" + num);


const fintSize = 26 + 'px';



// To Number

// 1)

console.log(typeof(Number('4')));

// 2) Унарный плюс

console.log(typeof(+'4'));

// 3)

console.log(typeof(parseInt('15px', 10)));


let answer = +prompt("Hello", "");



//To bollean

//0, '', null, undefined, NaN - false;

// 1)

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;
if (switcher) {
    console.log('Working...');
}

// 2)

console.log(typeof(Boolean(('4'))));

// 3)

console.log(typeof(!!"444"));
