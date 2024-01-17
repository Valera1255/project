'use strict';

const birthday = Symbol('birthday')

const user = {
    name: 'Alex',
    surname: 'Smith',
    //birthday: '20/04/1993', - удалено
    [birthday]: '20/04/1995',// создание через символ
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}
// примеры

/*Object.defineProperty(user, 'birthday', {value: prompt('Date?') , enumerable: true, configurable: true});
console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));*/

//user.birthday = '20/04/1995';


// что бы метод не выводился в консоль - флаг
Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) console.log(key); //вывод свойств
console.log(Object.getOwnPropertyDescriptor(user, birthday)); // символ не выводится в консоль

// флаги применяться к определенному свойсту - просмотр флагов
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

//console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// изменение свойств - только для чтения (defineProperty)
// Object.defineProperty(user, 'name', {writable: false});
// user.name = 'dsdfsdfv';

// Изначально все флаги true, если создаем свойство defineProperty то они будут все в false

/*Object.defineProperty(user, 'gender', {value: 'male'});
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));*/

// Редактирование нескольки свойств
Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});


// ФЛАГИ

// writable - true - свойство объэкта можно изменить, а false свойство будет только для чтения

// enumerable - true - свойство будет перечислятся в цыклах, а false цыкли будут его игнорировать

// configurable - true - свойство можно удалить, а атрибуты можно изменить, false - это делать нельзя


// Методы примеры (дополнительно)
// Object.is() - являються ли два значения обьєкта одинаковыми
// Object.entris() - попарное розпределение ключ и свойство - массив или матрица
