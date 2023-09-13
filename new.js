"use strict";

let str = 'some';
let strObj = new String(str);


console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};

//#2 пример на этапе создания через переменную (прототипа)
const jonh = Object.create(soldier);

//#1 пример с созданием обьекта
//const jonh = {
//  health: 100
//};

//jonh.__proto__ = soldier;

//#3 наследование для какого-то обекта от другого обьекта прототип Proto
//Object.setPrototypeOf(jonh, soldier);

jonh.sayHello();