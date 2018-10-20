"use strict";

function doLowerCamelCase(str) {
    var i;
    var arrWords = str.split(' ');
    arrWords[0] = arrWords[0][0].toLowerCase() + arrWords[0].slice(1);

    for (i = 1; i < arrWords.length; i++) {
        arrWords[i] = arrWords[i][0].toUpperCase() + arrWords[i].slice(1).toLowerCase();
    }

    return arrWords.join('');
}

module.exports = doLowerCamelCase;
