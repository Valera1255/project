'use strict';

// set - особый вид колекций (по тиму массива),
// массив значение которого значения встречаються однажды, не выводит повторения

const arr = [1, 2, 3, 4, 2, 4, 5, 5, 6];

// формируем новый сет
const set = new Set(arr);
console.log(set);


// Пример студентов на курсе
const arr1 = ["Alex", "Ann", "Alex", "Oleg", "Ann", "Alex"];
const set1 = new Set(arr1);
console.log(set1);

//функция помощник что фильтрует массив
function unique(arr1) {
    return Array.from(new Set(arr1));
}

console.log(unique(arr1));

// set методы

/*set1.add('Ivan'); // добавление значения
console.log(set1);

set.delete(value); // удаление значения

set.has(value); // проверка на существование значения

set.clear; // очистка
set.size; // размер
*/


// перебо сетов
// #1
for (let value1 of set1) 
console.log(value1);

//#2
set1.forEach((value, valueAgaing) => {
    console.log(value, valueAgaing);
});


// вывод значений
console.log(set1.values());
console.log(set1.keys());
console.log(set1.entries());


// функция помощник что фильтрует массив

/*function unique(arr2) {
    return Array.from(new Set(arr2));
}*/