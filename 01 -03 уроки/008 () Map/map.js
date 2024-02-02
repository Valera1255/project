'use strict';

//map - спец структуры данных которые похожи на объэкт и свойствами могут быть что угодно
// Map - методы
const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

// пример массив - массивов
const map = new Map([
    [{paper: 400}, 8000]
]);

// Циклом или методом forEach - для рациональности для избежания большого количества команд
const budget = [5000, 15000, 25000];

shops.forEach((shop, i) =>{
    map.set(shop, budget[i]);
});

console.log(map);

// #1 set - объэкт со свойством объэкта - заполнение карты
// по строчно
/*map.set(shops[0], 5000);
map.set(shops[1], 15000);
map.set(shops[2], 25000);

console.log(map);

// цепочкой
map.set(shops[0], 5000)
    .set(shops[1], 15000)
    .set(shops[2], 25000);

console.log(map); */




// получение значений - для взаимодействия get
//console.log(map.get(shops[0]));

// проверка на наличия свойств has
//console.log(map.has(shops[0]));

// удаление свойства из карты delete
//console.log(map.delete());

// опусташение карты clear
//console.log(map.clear());

// размер карты size
//console.log(map.size);


// map.keys - возращает итерированый объэкта по ключам
/*const goods = [];

for(let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
}

console.log(goods);
*/

// map.values - возвращает значения
/* for (let price of map.values()) {
    console.log(price);
}*/

// map.entries - возвращает значения + деструктизация переменных
/* for (let [shop, price] of map.entries()) {
    console.log(shop, price);
}*/

//перебор карты методом forEach
map.forEach((value, key, map) => {
    console.log(key, value);
})


//перевести объэкт в формат карты entries
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));
console.log(userMap);


//перевести карту в формат Объэкт - fromEntries
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);