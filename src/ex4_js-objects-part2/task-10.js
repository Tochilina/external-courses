"use strict";

function reversedStr(str) {
    var arrWords = str.split('');

    return arrWords.reverse().join('');

}

module.exports = reversedStr;
