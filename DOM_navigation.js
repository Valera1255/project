"use strict";

//Обращение к тэгам (например можно и к другим тэгам обратся) 
//к радительским элементам так же можно обратиться таким же способом
// в тєги можна закидывать разные стили или шрифты.

//console.log(document.body);

//console.log(document.documentElement);

//получени или обращение к родителю и вывод дочерних нодов = псевдомасив
// узлы (перенос строки, текстовые елементы) на странице их не видно (есть теги и есть узлы)

console.log(document.body.childNodes);

// получение дочерних элементов последний и первый 
//console.log(document.body.firstChild); текстовая нода
//console.log(document.body.firstElementChild); //елемент
//console.log(document.body.lastElementChild);
//console.log(document.body.lastChild);

//получение родителя (первый)
//console.log(document.querySelector('#current').parentNode);
//получение родителя (на уровень выше)
//console.log(document.querySelector('#current').parentNode.parentNode);

//аналог 
//console.log(document.querySelector('#current').parentElement);


//data атрибуты (назначение чего-то свойственного для орентира) + получение от него элементов и узлов
//<li data-current="3">3</li>

/*console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);*/


//forof пример перебора детей в бади и оставил элементы + <!-- renernh --> - комментарий не является текстовой нодой


for (let node of document.body.childNodes) {
    if (node.nodeName == '#text'){
        continue;
    }

    console.log(node);
}