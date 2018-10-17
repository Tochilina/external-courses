"use strict";

function compareElementsOfArray(arr) {
    var i;
    var max = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max;
}

module.exports = compareElementsOfArray;
