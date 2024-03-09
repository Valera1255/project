'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

// получение высоты и ширины коробки в консоль clientWidth / clientHeight
/*const width = box.clientWidth;
const height = box.clientHeight; 

console.log(width, height);*/

// получение полной высоты и ширины коробки с учетами полос прокрутки + borders + margins
// offsetWidth/offsetHeight

/*const width = box.offsetWidth;
const height = box.offsetHeight;

console.log(width, height);*/


//полная висота елемента scrollHeight/scrollWidth + в учет идет невидимая часть

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

// Задача на раскритие всей невидимой части

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});


// сколько контента неотлистаного (невидимого) - который скрыт - сверху
/*btn.addEventListener('click', () => {
    console.log(box.scrollTop);
});*/


// получение координат элемента getBoundingClientRect()
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);


// метод для получение дисплеев (стилей) видимого элемента для подальшей работы с ним + менять не можем

const style = window.getComputedStyle(box);
console.log(style.display);

// JS не может рабоать со стилями псевдоелментов, можно получить, а инлайн стили можно получить и изменять


console.log(document.documentElement.scrollTop); // можно модифицировать

// winwod.scrollBy(x, y) - скролит старницу относительно текущего положения
// winwod.scrollTo() - скролит старницу относительно всей страницы