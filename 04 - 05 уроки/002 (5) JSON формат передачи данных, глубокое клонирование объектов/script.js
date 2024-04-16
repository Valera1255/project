'use strict';

// JSON - текстовый формат обмена данных (JavaScript Object Notation) так же для хранении данных
// Набор пар как в объэкте (ключ - значение) + все строки должны быть в двойных ""

// В качестве значений могут быть объэкти, массивы, строки, числа, логические значения или null

const persone = {
    name: 'Alex',
    tel: '+390988987912',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// превращения данных для передачи данных на бэкенд
// методы
console.log(JSON.stringify(persone)); // {"name":"Alex","tel":"+390988987912","parents":{"mom":"Olga","dad":"Mike"}} => такой формат данных мы можем уже отправить на сервер, протоколы смогут их понять


// приходят данные с сервера JSON, преобразования данных наоборот для дальнейшего использования
console.log(JSON.parse(JSON.stringify(persone))); // {name":Alex,tel:+390988987912, parents:{mom: Olga, dad:Mike}} => обычный объэкт

// JSОN - понятен для чтения + небольшой объем данных

const clone = JSON.parse(JSON.stringify(persone)); // полноценный клон в котором так же можно изменять свойства
clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);

