'use strict';

// this - контекст это то что окружает фукцию и в каких услових она вызивается

// Методы вызова контекста функции с примерами

// 1) Обычная функция: this = window, но если use strict - undefined
/*function showThis () {
    console.log(this);
}

showThis();*/

//будет undefined так как контекст функции не меняется
// решение - использование замыкание функции
function showThis (a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(4, 5);

// 2) Контекст у методов объэкта - сам объэкт
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout (){
            console.log(this);
        }
        shout();
    }
};

obj.sum();

// 3) this в конструкторах и классах - это новый экземпляр объэкта 

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

const valera = new User('Valera', 24);



//4) Ручная привязка this: call, apply, bind 

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'Valera'
};

sayName.call(user, 'Martsynkevych');// если используем то аргументи передаються через запятую
sayName.apply(user, ['Martsynkevych']); // если используем то аргументи передаються в массиве


// новая фукция связаную с определенным контекстом

function count (num) {
    return this*num;
}
const double = count.bind(2);

console.log(double(13));



// Примеры

// Класическа функция => контекст вызова сам элемент
const btn = document.querySelector('button');

/*btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});*/

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});


// Стрелочные функции - нет контекста

// Стрелочная функция всегда берет контекст у родителя sayNumber: function()
// Метод ссылается на объэкт const object в котором он существут
// Поэтому у стрелочной функции контекстом будет object

const object = {
    num: 6,
    sayNumber: function(){
        const say = () => {
            console.log(this);
            console.log(this.num);
        };


        say();
    }
};

object.sayNumber();



// Пример со стрелочной функцией
// Если тело фунцкции маленькое то можно не использовать {} и писать все в одну строчку + так же без круглых ()

const double1 = a => a * 2;
console.log(double1(4));

//Правило
/* В обработчиках событий когда мы используем обычнй синтаксис через function()
мы имеем доступ к this - тоже самое что и eventTarget, если стрелочная, то контекст теряется и будет undefined */