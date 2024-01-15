'use strict';
// оператор опциональной цепочки
// проверяет выражения слева от себя и останавливает операции если натыкается на null и undefined
// при этом возвращает результат как undefined и происходит это без ошибок

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

/*if(block){
    console.log(block.textContent);
}
*/
// тут будет ошибка и дальше в консоль ничего не будет выводить
//console.log(block.textContent);

// применяєм операто опциональной цепочки (оператор проверил значение слевао от себя
// или есть здесь null или undefined то он остановил операцию и дал понять что зедсь во избежании ошибки)
console.log(block?.textContent);

// работает только на чтение
// так будет ошибка. Это мы пытаемся в undefined записать строку
//block?.textContent = "2";


console.log(1 + 3);

// данные которые мы получили или пользователь вводит на странице (множество данных могут быть даже которые не существую в разных проектах)
const userData = {
    name: 'Valera',
    age: null,
    say: function () {
        console.log('Hello');
    }
};

userData.say();
// вызов несуществуюзего метода, поэтому применим оператор ? опциональной цепочки. Минус ошибка
userData.hey?.();

// при таком коде ошибки не будет
/*if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}
*/

//при таком будет
//console.log(userData.skills.js);

// операто опциональной цепочки
//console.log(userData?.skills?.js);

/* проверим или существует userData, но она должна существовать, если её вообще не будет,
закоментированая нарпимер, то будет ошибка*/
/*const userData = null;
console.log(userData?.skills?.js);*/