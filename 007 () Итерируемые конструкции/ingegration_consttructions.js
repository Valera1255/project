'use strict';


const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}
// перебор объєкта, если использовать for of будет ошибка - user in not iterable
// обьэкт не итеррируемый
// будет итеррируемый есди имееь символ точка иттератор

/*for (const key in user) {
    console.log(user[key]);
}*/

// перебор массива - перебирает свойства не обязательно по порядку (не рекомендуется использовать)
// for of - лучше
// при использовании for of лишние методы и свойства не выводяться
const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function() {};

console.dir(arr);

for (const key of arr) {
    console.log(key);
}


// достаточно оставить просто значения key - значения, а не ключ
/*for (const key of arr) {
    console.log(key);
}



// str перебор - перебирает свойства не обязательно по порядку (не рекомендуется использовать)
// for of - лучше
const str = 'string';

for (const key in str) {
    console.log(str[key]);
}
*/

// делаем так что бы метод for of работал с объэктом, добавить надо символ итератор Symbol.iterator
const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('Hello');
    }
}

// метод вызывается один раз - он должен вернуть итератор - объєкт с методом next
// пример с зарплатой что бы сделать объет преперебераемым с помощью for of
salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,


        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                {done: true}
                }
            }

    }
}

// вместо for of другая конструкция - запуск метода salaries[Symbol.iterator] который привязан к переменной
const iterator = salaries[Symbol.iterator]();
console.log(iterator.next()); // ручноной вызов метода next()

/*for (let res of salaries) {
    console.log(res);
}*/