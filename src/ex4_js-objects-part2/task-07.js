"use strict";

function formatedStr(str, n) {
    var diff = str.length - n;

    if (diff > 0) {
        diff += 1;
        return str.slice(0, -diff) + '…';
    }

    return str;
}

module.exports = formatedStr;