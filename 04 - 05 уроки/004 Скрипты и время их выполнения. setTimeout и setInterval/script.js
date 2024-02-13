'use strict';

// управлеение временем скриптов, появление их на странице (разные виплывающие окна)
// простая анимация на JS

// setTimeout -управлеение временем скриптов (время в милисекуднах)
// можно задавать без переменной setTimeout()

/*const timeID = setTimeout(function() {
    console.log('Hello');
}, 2000);*/

// можна передать аргумент => text

/*const timeID = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello');*/

// передача готовой функции

//const timeID = setTimeout(logger, 2000);
/*function logger() {
    console.log('text');
}*/

// сброс таймаута (может быть вызвана разными причинами) - clearInterval(timeID);

// clearInterval(timeID);


// пример клик на кнопку (сброс таймера) + setInterval() - интервал
// объявляем глобальную переменную что бы сбро интервала работал за переделами обработчика

/*const btn = document.querySelector('.btn');
let timeID, 
    i = 0;


btn.addEventListener ('click', () => {
    // const timeID2 = setTimeout(logger, 2000);
    timeID = setInterval(logger, 600);
});


function logger() {
    if (i === 3) {
        clearInterval(timeID);
    }
    console.log('text');
    i++;
} */


// рекурсивный setTimeout
/*let id = setTimeout(function log(){
    console.log('hello');

    id = setTimeout(log, 500);
}, 500); */


// Практика (анимация синего квадрата) - двигание => инлайн стили elem.style.top = pos + "px";
//            elem.style.left = pos + "px";

const btn = document.querySelector('.btn');

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if ( pos == 300) {
            clearInterval(id);
        } else {
            pos ++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener ('click', myAnimation);