"use strict";

function evaluateArray(arr) {
    var i;
    var evalArr = [0, 0, 0];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            evalArr[2]++;
        } else if ((!(arr[i] % 2)) && (arr[i] !== null)) {
            evalArr[0]++;
        } else if ((arr[i] % 2)) {
            evalArr[1]++;
        }
    }
    return evalArr;
}

module.exports = evaluateArray;
