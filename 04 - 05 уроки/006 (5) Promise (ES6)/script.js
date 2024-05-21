'use strict';

// Последовательность в коде (если произошло что-то то мы выполним какое-то действие) = цепочка (обещиние)

// примеры с асинхронным кодом

console.log('Запрос данных...');

// Promises (resolve, reject - аргументы вместо которых будут подставляться функции)
const req = new Promise(function(resolve, reject){

    // имитация асинхроного кода
    setTimeout(() => {
        console.log('Подготовка данных....');
        
        const product = {
            name: 'TV',
            price: 2000
        };
    
        // после получения данных мы хотим провести какие-то операции и тоже выполнить их асинхронно
        
        // вместо колбека можно использовать функцию промиса resolve
        resolve(product);
    
    }, 2000);
});

// положительный исход (метод)
req.then((product) => {
        // console.log('Данные получены');
        /*setTimeout(() => {
        product.staus = 'order';
        console.log(product);
        }, 2000);*/

    // созданим еще один промиз (и будем его возвращать)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.staus = 'order';
            // положительный результат
            resolve(product);
            //reject();
        }, 2000);
        
    }).then(data => {
        data.modify = true;
        return data;

        
    }).then((data) => {
        console.log(data);
    }).catch(() =>{ // при провале негативный метод (в конце)
        console.error('Произошла ошибка');
    }).finally(() => { // // БЛОК КОДА finaly - в конце. Она позволяет выполнить действие в любом исходе промиса
        console.log('Finaly')
    });
// Добиваемся последовательности кода

});



// --------------------------------------------------------------

// Методы all and race
/*const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

//test(1000).then(() => console.log('1000 ms'));
//test(2000).then(() => console.log('2000 ms'));

// массив с проомисами (он ждет окончания всех промисов и потом только будет выполнять что-то)
/*Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});


//массив с проомисами (он не ждет окончания всех промисов, а выполнят сразу как-только один промис выполнится)
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});



-------------------------------------------------------------------

/*setTimeout(() => {
    console.log('Подготовка данных....');
    
    const product = {
        name: 'TV',
        price: 2000
    };

    // после получения данных мы хотим провести какие-то операции и тоже выполнить их асинхронно

    setTimeout(() => {
        product.staus = 'ordered';
        console.log(product);
    }, 2000);

}, 2000);
*/
