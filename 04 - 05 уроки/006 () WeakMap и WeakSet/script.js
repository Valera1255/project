'use strict';

// let user = {name: 'Valera'};

// const arr = [user]; // ссылка на объэкт сохранилась

// let map = new Map();

//слабая карта
/*let map = new WeakMap(); // в таком случае сборщик мусора удаляет ссылку на объэкт
map.set(user, 'data');

// объект удален с памяти так как на него нет ссылки
user = null; */

//console.log(user);
//console.log(arr[0]);

//console.log(map.has(user));
//console.log(map);


// WeakMap() 
// 1. Ключи только объэкты, 2. Если нет ссылки на объэкт, то объэкт будет удален из карты

// Пример c онлайном
let cache = new WeakMap();

// функция для запоминания пользователей онлайн
function cacheUser(user) {

    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);

}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

// пользователь вышли из онлайна
lena = null;

console.log(cache.has(lena)); 
console.log(cache.has(alex));

// WeakSet() - добавлять можно только объэкт - методы (add, has, delete);

// Пример c сообщениями в чате

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '...', from: 'Valera'},
];

let readMessages = new WeakSet(); 
readMessages.add(messages[0]);

// сборщик мусора удаллил ссылку на {text: 'Hello', from: 'John'} с сформированого сета


// удаление объэкта
messages.shift(messages[0]);

readMessages.add(messages[1]);


console.log(readMessages.has(messages[0]));
