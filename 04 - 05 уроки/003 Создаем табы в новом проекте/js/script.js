'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // обьявляем переменные внутри обработчика событий DOMContentLoaded

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



});
