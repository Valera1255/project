"use strict";

/*let a = 5;
let b = a;

b = b + 5;
console.log(b);
console.log(a);


const obj = {
    a: 5,
    b: 1
};

//const copy = obj; // Cсылка

copy.a = 10;

console.log(copy);
console.log(obj);

*/
function copy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    
    return objCopy;
}

const numbers = {
    a: 2,
    b: 3,
    c: {
        x: 7,
        y: 4
    }
};
/*
const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

*/
const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

//console.log(add);
//console.log(clone);

const oldArray = ['a', 'v', 'c'];

const newArray = oldArray.slice();

newArray[1] = 'jwewefw';

console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', ' facebook'];

console.log(internet);


function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);


const array = ["a", "b"];

const new_array = [...array];

const q = {
    a: 1,
    b: 2
};

const new_obj = {...q};

console.log(new_array);
console.log(new_obj);
