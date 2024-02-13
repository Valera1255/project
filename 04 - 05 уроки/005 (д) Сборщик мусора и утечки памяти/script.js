// утечка памяти связана с глобальними переменными (маловероятный случай)
// без 'use strict'; создастся переменная без объявления

// такая глобальная переменная не может быть удалена сборщиком мусора
/*function func() {
    smth = 'string';
}*/


// забытые таймеры
const someRes = getData();
const node = document.querySelector('.class');

setInterval(function (){
    if (node) {
        node.innerHTML = someRes; // записываем данные
    }

}, 1000);


// обрабоччики событий на нусещуствующие элементы
// современные браузеры будуть удлаять обработчик события, если элемент уже был удален


// замыкание - утечка памяти

function outer() {
    const potentialHugeArray = [];
    return function innter(){
        potentialHugeArray.push('Hello');
        console.log('hello');
    }
}


const sayHello = outer(); // function innter() будет вызвана, potentialHugeArray имеет внутреннюю ссылку на массив через замыкание  
// сохраняется в памяти



// ссылки на DOM элементи
function createElement() {
    const div = document.createElement('div');
    div.id = 'test';
    // return div;
    
    document.body.append(div);
}

// const testDiv = createElement();

createElement();

//document.body.append(testDiv);

// команда удаляет элемент с DOM с верстки, но переменная остаётся 
function deleteElement() {
    document.body.removeChild(document.getElementById('div'));
}

deleteElement();