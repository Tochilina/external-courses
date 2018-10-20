"use strict";

function countUnicSymbol(str) {
    var arrWords = str.split('');
    var i;
    var result = {};

    for (i = 0; i < arrWords.length; i++) {
        if (result[str[i]] === undefined) {
            result[str[i]] = str.split(arrWords[i]).length - 1;
            console.log(str[i], result[str[i]]);
        }
    }
}

module.exports = countUnicSymbol;
