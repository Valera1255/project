'use strict';

const inputUAH = document.querySelector('#uah'),
      inputUSD = document.querySelector('#usd');

// если цепляем обработчик событий change - когда фокус пропадает с input
// событие input всегда происходит когда вводиться или удаляется (более универсальное)

//XMLHttpRequest - запрос на сервер, есть свои методы
inputUAH.addEventListener('input', () => {
    
    const request = new XMLHttpRequest();

    // open -собирает настройки для будущего запроса
    // request.open(method, url, async - true or false, login, pass);
    
    request.open('GET', 'js/current.json');
    // Заголовок для передачи JSON файлов 
    request.setRequestHeader('Content-type', 'application/json; charset = utf-8');
    // отправка запроса
    request.send();

    // события
    // событие которое отслеживает статус (следит за свойством readyState) готовность запроса в текущий момент
    // request.addEventListener('readystatechange') - редко используется, чаще load
    // if (request.readyState === 4 /*(DONE)*/ && request.status === 200 /*(OK)*/ ) -'readystatechange'


    request.addEventListener('load', () => { //срабатывает один раз когда запрос уже готов
        
        if (request.status === 200 /*(OK)*/ ) {
            // console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2); // округление
        } else {
            inputUSD.value = "Что-то пошло не так";
        }// сервера иногда ломаються поэтому надо показывать что произошло
    });



    // свойства
    // status
    // statusText
    // response
    // readyState}
});


    
