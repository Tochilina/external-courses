"use strict";

function upperFirstSymboL(str) {
    var i;
    var arrWords = str.split(' ');

    for (i = 0; i < arrWords.length; i++) {
        arrWords[i] = arrWords[i][0].toUpperCase() + arrWords[i].slice(1);
    }

    return arrWords.join(' ');
}

module.exports = upperFirstSymboL;
