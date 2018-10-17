"use strict";

function compareElementsOfArray(arr) {
    var i;

    for (i = 0; i < arr.length - 1;) {
        if (arr[i] !== arr[++i]) {
            return false;
        }
    }

    return true;
}

module.exports = compareElementsOfArray;
