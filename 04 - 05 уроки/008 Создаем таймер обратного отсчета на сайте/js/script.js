'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // обьявляем переменные внутри обработчика событий DOMContentLoaded

    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContenct = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    // функция скрытия всех не нужных табов и активностей

    function hideTabContent() {
        tabsContenct.forEach(item =>{
            // item.style.display = 'none'; статичний

            // добавляем анимацию через классы .show{display: block;}.hide{display: none;}
            //.fade{animation-name: fade;animation-duration: 1.5s;}@keyframes fade{from{opacity: 0.1;}to{opacity: 1;}}

            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });

    }

    // функция которая будет показывать все нужных табы и активности
    // если фкнкция вызивается без аргумента то по умолчанию i = 0

    function showTabContent(i = 0) {
        // tabsContenct[i].style.display = 'block';

        //добавляем анимацию через классы .show{display: block;}.hide{display: none;}
         //.fade{animation-name: fade;animation-duration: 1.5s;}@keyframes fade{from{opacity: 0.1;}to{opacity: 1;}}
        tabsContenct[i].classList.add('show', 'fade');
        tabsContenct[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();


    // делигирование событий = обработчик клика

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // Timer

    const deadLine = new Date(2024, 1, 26, 20); // может приходить с разных источников

    // функция котороя расчитывает разницу между текущим временем и дедлайном
    function getTimeRemaining(endtime) {
         // Исправляем баг с датой которая прошла уже (задаем переменные отдельно)
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());// разница в милисекундах (расчёт)

            // Делаем проверку на меньше или равенство нулю и исправляєм баг (заполняем таймер нулями) => без лишних расчётов
            if (t <= 0){
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
            }else{
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);
            }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // функция помошник что доставляєт 0 перед однозначными числами (для правильности)
    // проверяєм строку на количество символом и если один символ то перед числом стави 0
    function getZero(num) {
        if(num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) { //сетим часы на страницу
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000); //запустим сет интервал для выполнения фукции для часов 

        updateClock(); // убираем мерцание верстки уже утавновленого времени при обновлении старинцы
        // функция инициализации - раз запуститься установит текущую дату и исчезнит

        function updateClock() {
            const t = getTimeRemaining(endtime); // рассчет времени на данную секунду - результат работы фукции помещен в переменную
            
            // помещаєм на страницу получившися элементы (обновляєм)
            // юзаєм тут функцию помошника
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            // также нужно будет остановить интервал когда время закончится
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }

    }

    setClock('.timer', deadLine);


    // Modal Window
    // поцепили дата (data-modal) атрибути на кнопки для упрощения работы (только с ними для показа одного и того же дествия)
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    
    // цепляем обработчик событий на кнопки (добавляем (переключаем) клас) - перебираем все кнопки и цепляем на все
    
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            //modal.classList.add('show');
            //modal.classList.remove('hide');
    
            // вариант с toogle
            modal.classList.toggle('show');
            // делаем так что бы страничка не скролилась при вызове модельного окна
            document.body.style.overflow = 'hidden';
    
        });
    });

    // don't repeat yourself (нельзя повторяться в коде) - лучше вынести в функцию
    function closeModel() {
        // вариант с toogle
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModel); //функция будет выполенна после клика

        // вариант с добавлением класов
        //modal.classList.add('hide');
        //modal.classList.remove('show'););



    // закрытие модального окна кликая на подложку
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModel();
        }
    });

    //Закрытие модельного окна через клавишу ESC и если он содержит класс show (что бы не всегда срабатывала функция)

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')) {
            closeModel();
        }
    });

    // коды клавиш https://www.toptal.com/developers/keycode

});
