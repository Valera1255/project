'use strict';

/*
const num = new Function(3);

console.log(num);*/

// this для каждого отдельного пользователя
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, ${this.name}`);
    }
}

//Prototyoe используем прототип и создаем метод
// Прототипно он будет наследоваться так как перед потомками (переменными) которые после него

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} вышел`);
}

// после таких созданий функция стала конструктором, тоесть мы може тепер создавать новых пользователей

const valera = new User('Valera', 24);
const alex = new User('Alex' , 25);

valera.exit();

valera.hello();
alex.hello();

console.log(valera);
console.log(alex);

// Конструкторы нужны для создание новых однотипных объэктов (товары, ролики на сайте, слайды)
