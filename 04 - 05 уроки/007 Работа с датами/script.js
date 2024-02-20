'use strict';

//const now = new Date();

//const now = new Date('2024-02-20');

// const now = new Date(2024, 2, 20, 20);

// милисекунды
//const now = new Date(0);

// ниже 1970 года 
// const now = new Date(-1123);

// Методы Get
const now = new Date();

console.log(now.getFullYear()); // получение года
console.log(now.getMonth()); // получение месяца
console.log(now.getDate()); // получение дня
console.log(now.getDay()); // получение дня недели (начало с Воскремения)

// c UTC
console.log(now.getUTCHours());

console.log(now.getTimezoneOffset()); // разница с UTC и обычным своим поясом

console.log(now.getTime()); // время в милисекундах сколько всего прошло


// Методы Set (аналогично Get)
const now1 = new Date(); 
// если без параметров то браузер ореентируется на лок данные, если через консоль VS Сode то будет в формате UTC

// console.log(now1.setHours(18, 40)); // сет времени и минут
console.log(now1.setHours(40)); // перемещение на след день, JS исправил недочёт
console.log(now1);


const now2 = new Date('2024-02-21'); // здесь автоматически происходит
// new Date.parse('2024-02-21'); // методод парс


// Пример измерения Таймстемпа (какой-то функции или цикла - бенчмарк)

let start = new Date();

for(let i=0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработа за ${end - start} милисекунд`);