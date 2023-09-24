'use strict';

// #1 Получение элемента по ID с HTML документа

//const box = document.getElementById('box');
//console.log(box);

// #2 Получение элемента по Тэгу с HTML документа 
//(получение не одного элемента, а псевдомасив элементов)

//const btns = document.getElementsByTagName('button');
//console.log(btns);


// #3 Получение элемента по Тэгу с HTML документа 
//(получение не одного элемента по идентификатору)

//const btns = document.getElementsByTagName('button')[2];
//console.log(btns);

//OR

//const btns = document.getElementsByTagName('button');
//console.log(btns[0]);


// #4 Получение класа с HTML документа псевдомасивы

//const circles = document.getElementsByClassName('circle');
//console.log(circles);


// #5 Метод для работы с селекторами - все селекторы псевдомасивы
//(в скобки записываем сss селектор + обезятельно ставим точку как в сss)

/*const hearts = document.querySelectorAll('.heart');

console.log(hearts);
hearts.forEach(item => {
    console.log(item);
})*/



// #6 Метод для работы с селекторами - один селектор
//(в скобки записываем сss селектор + обезятельно ставим точку как в сss)

//const oneHeart = document.querySelector('.heart');
//console.log(oneHeart);



const box = document.getElementById('box'), 
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart'),
        wrapper = document.querySelector('.wrapper');

console.dir(box);

// Поменять цвет
box.style.backgroundColor = 'blue';

// Поменять ширинуbox.style.width = '500px';

// Передача стилей в качестве текста в CSS
box.style.cssText = 'background-color: blue; width: 500px; border-radius: 100px;';

// обращение к определенному элементу псевдомассива и изменение его
btns[1].style.borderRadius = '40px';
circles[0].style.backgroundColor = 'red';


// Примеры перебора всех элементов псевдомасива (которые подппадают под нужный селектор иди параметр)
//с применением к нему нужных стилей (разные методы)

//#1 цикл for
//for (let i = 0; i < hearts.length; i++) {
   // hearts[i].style.backgroundColor = 'blue';
//}

//#2 forEach()
hearts.forEach(item => {
    item.style.backgroundColor = 'green';
})


//Методы для работы с элентами страницы

const div = document.createElement('div'); // - сохраняет внутри JS файла

const text = document.createTextNode('Тут был я'); // создание ноды текстового узла без оболочки тега нутри JS файла

// Работа с клаcами в JS через методы (стилизация, удаление, добавление)
div.classList.add('black');
wrapper.append(div);


//document.body.append(div); //добавили клас black в body в конец

//document.querySelector('.wrapper').append(div);//добавили клас black в новый родитель в селектор с определенным класом в конец
//wrapper.prepend(div);// добавили клас black в новый родитель с определенным класом в начало


//hearts[0].before(div); манипуляция со вставкой перед
//hearts[0].after(div); манипуляция со вставкой перед

//circles[0].remove(); удаление элемента

//hearts[0].replaceWith(circles[0]);// замена одного элемениа на другой


//Устаревшые конструкции

//#1
//wrapper.appendChild(div);//добавление класса black в wrapper в конец

//#2
//wrapper.insertBefore(div, hearts[2]);// вставка класа black перед первым элеменгнтом сердечка который указали

//#3
//wrapper.removeChild(hearts[1]);//удаление элемента

//#4
//wrapper.replaceChild(circles[0], hearts[0]); //замена одного элемениа на другой

// Встака элементов кода ХТМЛ или текста

div.innerHTML = '<h1>Hello World!</h1>';//вставили заголовок h1 в блок с классом black "вставка структуры"

//div.textContent = 'Hello';// вставили текст в div с классом black "вставка текста"

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');//вставка кусочка ХТМЛ кода до или после элемета