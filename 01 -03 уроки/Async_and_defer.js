"use strict";
//defer подгружаєт скрипт раньше формирования страницы (подгрузка скрипта в фоне)
// скрипты с таким отрибутом будут дожидатся подгрузки страницы не смотря на то что они выше
const p = document.querySelectorAll('p');
console.log(p);

//async скрипт с таким атрибутом запускается в фоне как только он был загружен не дожидаясь другий скриптов
// с таким атрибутом сторонние скрипты что добавляются к старнице должны быть назависимы от DOM структуры и от других скриптов


// создание тега скрипт


function loadScript (src) {
    const script = document.createElement('script');
    script.src = src;
    //script.async = false;
    document.body.append(script);
}

loadScript("test.js");
loadScript("some.js");