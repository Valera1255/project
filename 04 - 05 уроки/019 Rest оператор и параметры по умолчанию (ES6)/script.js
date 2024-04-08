'use strict';
// rest оператор контролируюет все после a, b + всегда последний
// rest оператор собрал отдельные сущостности в массив => basic rest [ 'operator', 'usage' ]
const log = function (a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

// параметр по умолчанию => (можно присвоить сразу какое-то занчение basis = 2)
function calcOrDouble (number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);