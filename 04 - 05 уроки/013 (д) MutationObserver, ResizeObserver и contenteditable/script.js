'use strict';
//отслеживание действия на странице, изменения объэктов

const box = document.querySelector('.box');

// сущность что следит за коробкой MutationObserver
let observer = new MutationObserver(mutationRecord => {
    console.log(mutationRecord);// что приходит в консоле
});

// следим за определенным елеметом и отслеживай изменения
observer.observe(box, {
    childList: true
})

// удаление observe
observer.disconnect();