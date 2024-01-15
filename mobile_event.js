'use strict';

//мультитач + тач на мобилках ивенты на моб устройствах

//touchstart
//touchmove
//touchend
//touchenter
// touchleave
// touchcancel

// для теста тача можно перейти в браузере в режим браузера адаптации и потестить

window.addEventListener('DOMContentLoaded', () =>{
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {

        e.preventDefault();// отмена стандартного поведения браузера
        console.log('Start');
        console.log(e.targetTouches);

    }); //touchstart


    box.addEventListener('touchmove', (e) => {

        e.preventDefault();// отмена стандартного поведения браузера
        console.log(e.targetTouches[0].pageX);

    }); //touchmove


    box.addEventListener('touchend', (e) => {

        e.preventDefault();// отмена стандартного поведения браузера
        console.log('End');

    }); //touchend
});


// свойства при работе с сенсорными устройствами

// touches - все пальцы
// targetTouches - все пальцы с определенным элементом
// changedTouches  - пальцы что участвуют в текущем событии