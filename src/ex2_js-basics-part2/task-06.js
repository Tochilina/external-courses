"use strict";

function getTypeOfNumber(numeric) {
    var i;

    if ((numeric < 1) || (numeric > 1000)) {
        return 'Данные неверны';
    }

    for (i = 2; i < Math.round(Math.sqrt(numeric)); i++) {
        if (!(numeric % i)) {
            return `Число ${numeric} - составное число`;
        }
    }

    return `Число ${numeric} - простое число`;
}

module.exports = getTypeOfNumber;
