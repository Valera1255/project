"use strict";

// Обработчик события это функция которая срабатывает когда событие произошло 
//onclick="alert('Click')" id="btn">Нажми меня</button> - нерекомендованый скроипт

// Свойства обработчиков и события с использованием DOM (дом дерева)

const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// То самое свойство онклик только через JS 
//onclick="alert('Click')" id="btn">Нажми меня</button>

//btn.onclick = function() {
//    alert('Click');
//};

//есть возможность назначать несколько одинаковые действий
/*btn.addEventListener('click', () => {
    alert('Click');
});

btn.addEventListener('click', () => {
    alert('second click');
});
*/

/*лисенер это метод для добавления события выполнящего какие-то действия на странице через callback фкнкцию
+ добавление объєкта события как аргумент события event - (e)
свойсто таргет - event.targer (елемент на котором произошло событие)
 + можно после этого события взаимодействовать с элеметом (мы получили елемент с события после можно например его удалить)

 Тоже самое с кликом */ 

/*btn.addEventListener('mouseenter', (event) => {
    console.log(event.target);
    event.target.remove();
});*/


//btn.addEventListener('click', (event) => {
//    console.log(event.target);
//});




/*const deleteEl = (event) => {
    console.log(event.target);
    event.target.remove();
};
*/

// создание удаляющего события

/*let i = 0;
const deleteEl = (event) => {
    console.log(event.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteEl); 
    }
};

btn.addEventListener('click', deleteEl);*/

// Всплытие событий (сработало сначало вложеное событие, а после уже иерархии поднимаясь сработало действие на розовом оверлее)
// поднимается все выше и выше по иерархии

const deleteEl = (event) => {
    //console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
};

//btn.addEventListener('click', deleteEl);
//overlay.addEventListener('click', deleteEl);



//Отмена событий браузера

/*const link = document.querySelector('a');

link.addEventListener ('click', (event) => {
    event.preventDefault();//помещаем в начало событий - отмена события кликания

    console.log(event.target);
});
*/

// посвестиь одно событие на кнопки

btns.forEach(btn => {
    btn.addEventListener("click", deleteEl, {once: true}); // добавление опции кликаниее одинажды
});