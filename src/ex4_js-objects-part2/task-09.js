"use strict";

function insertStr(str, word, n) {
    var arrWords = str.split(' ');
    var epmtyRemove;
    var position = n + 1;

    epmtyRemove = arrWords.splice(position, arrWords.length, word);
    arrWords.push(epmtyRemove);

    return arrWords.join(' ');
}

module.exports = insertStr;
