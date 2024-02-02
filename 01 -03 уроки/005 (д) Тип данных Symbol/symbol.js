'use strict';
//работа над символами разные примеры
//let id = Symbol('id');

/*const obj = {
    'name': 'Test',
    //ссылка на символ
    //[id] : 1,
    [Symbol("id")]: 1,
    getId: function(){
        return this[id];
    }
}

// Символы могут иметь одинаковое описание но они не равны друг другу = уникальные
//let id = Symbol('id');
//obj[id] = 1;




//console.log(obj.getId()); //получение cвойства ссылки Символ №1
console.log(Object.getOwnPropertySymbols(obj)); //получение свойства ссылки Символ методом №2


console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // получение свойста, ссылки, поменять свойство

// когда нету ссылки на свойства объэкта
// console.log(obj[id]); Uncaught ReferenceError: id is not defined - 

//for(let value in obj) console.log(value);

*/

//Другой пример

const myAweasomeDB = {
    movies: [],
    actors: [],
    // id: 123 // уникальный модификатор который не должен меняться
    //[Symbol("id")]: 123

    //Глобальный реестр символов
    [Symbol.for("id")]: 123
}

// сторонний код библиотеки

myAweasomeDB.id = '232334';

console.log(myAweasomeDB[Symbol.for('id')]);
console.log(myAweasomeDB);