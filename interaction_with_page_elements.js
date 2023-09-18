'use strict';

// #1 Получение элемента по ID с HTML документа

const box = document.getElementById('box');
console.log(box);

// #2 Получение элемента по Тэгу с HTML документа 
//(получение не одного элемента, а псевдомасив элементов)

//const btns = document.getElementsByTagName('button');
//console.log(btns);


// #3 Получение элемента по Тэгу с HTML документа 
//(получение не одного элемента по идентификатору)

//const btns = document.getElementsByTagName('button')[2];
//console.log(btns);

//OR

const btns = document.getElementsByTagName('button');
console.log(btns[0]);


// #4 Получение класа с HTML документа псевдомасивы

const circles = document.getElementsByClassName('circle');
console.log(circles);


// #5 Метод для работы с селекторами - все селекторы псевдомасивы
//(в скобки записываем сss селектор + обезятельно ставим точку как в сss)

/*const hearts = document.querySelectorAll('.heart');

console.log(hearts);
hearts.forEach(item => {
    console.log(item);
})*/



// #6 Метод для работы с селекторами - один селектор
//(в скобки записываем сss селектор + обезятельно ставим точку как в сss)

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);