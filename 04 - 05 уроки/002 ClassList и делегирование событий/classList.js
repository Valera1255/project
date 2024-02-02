'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

console.log(btns[0].classList.length);

// методы
//console.log(btns[0].classList.item(0)); // получение класа под опеределенным индексом
// console.log(btns[1].classList.add('red')); // добавить класс
//console.log(btns[0].classList.remove('blue')); // удалить класс
// console.log(btns[0].classList.toggle('blue')); // добавить класс если его нет, если он есть его не добавляет а удаляет

// наличие класа contains
/*if (btns[1].classList.contains('red')) {
    console.log('red');
}*/


// реализация гамбeргер меню (добавление и удаление класа)
// 1
btns[0].addEventListener('click', () => {
/*    if (!btns[1].classList.contains('red')) {
       btns[1].classList.add('red'); 
    } else {
        btns[1].classList.remove('red'); 
    } */

    // 2
    btns[1].classList.toggle('red');

});

// ClassName устаревшее свойство для ознакомления
// console.log(btns[0].className);


// Делигирования событий

wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);

    // событие на все кнопки с тегом BUTTON 
    /*if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello');
    }*/

    // продвинутый метод делегирования - совпадение
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
    }


    // событие на первую кнопку что имеет клас blue
    /*if (event.target && event.target.classList.contains('blue')) {
        console.log('Hello');
    } */
});

// обработчик события через перебор
/*btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Hello');
    });
}); */

// создание динамического контента
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

