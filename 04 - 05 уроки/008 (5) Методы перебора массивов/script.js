'use strict';


// Методы перебора массива


// filter - отфильтровать по критерию

const names = ['Ivan', 'Ann', 'Ksenia', 'Volodemart'];

const shortNames = names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames);



// map - позволяєт исходный массив и изменить его (элементы)

const answers = ['IvaN', 'AnnA', 'Hello'];

const results = answers.map(item => item.toLocaleLowerCase());
console.log(results);



// every && some (turue or false)

const some = [4, 'qwe', 'dfefw'];
console.log(some.some(item => typeof(item) === 'number')); // хотя бы один

console.log(some.every(item => typeof(item) === 'number')); // каждый


// reduce - метод для сбора массивов в единое целое

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => { //можно подставить начальное значение (3)
    return sum + current;
});
console.log(res);


const fruits = ['apple', 'pear', 'plum'];
const all = fruits.reduce((sum, current) => {
    // return sum + ', ' + current;
    return `${sum}, ${current}`;
});
console.log(all);



// Пример

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};


// entries - перевод объэкта в матрицу массив
const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);