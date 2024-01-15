'use strict';

/*const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)*/

const boxQuery = document.querySelectorAll('.box');
const boxGet = document.getElementsByClassName('box');

// метод matches - применяется на прямо на DOM элементах - поиск внутри элемента на который он применяеться
boxQuery.forEach(box => {
    if(box.matches('.this')) console.log(box);
})

// метод closest - поиск у своих родителей
console.log(boxQuery[0].closest('.wrapper'));



/*
//Живие и статичиские колекции - отслеживание текущих изменений HTMLCollection [div.box]
boxQuery[0].remove();
boxGet[0].remove();

for(let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    //document.body.append(div);
    boxGet[boxGet.length] = div; // нерабочий способ
}

console.log(boxQuery); // статичная колекция
console.log(boxGet); // живая колекции - динамическое состояние - отслежживание в DOM

//метод получение со странички дочерних элементов
//console.log(document.body.children);

console.log(Array.from(boxGet)); // масив из масиво-подобного элемента

*/