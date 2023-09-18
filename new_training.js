'use strict';

/*let number = 5; debugger

function LogNumber () {
    console.log(number);debugger
}

number = 6;

LogNumber(); debugger


number = 8;

LogNumber(); debugger*/

function createCounter () {
    let counter = 0;

    const myFuction = function () {debugger
        counter ++;debugger
        return counter;debugger
    }
    return myFuction;
}
debugger
const inrement = createCounter();
const c1 = inrement();debugger
const c2 = inrement();debugger
const c3 = inrement();debugger

console.log(c1, c2, c3);
