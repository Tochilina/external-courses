'use strict';

function analogSlice(arr, param1, param2) {
    let start = param1;
    let end = param2;
    let resultArr = [];

    start = isNaN(start) ? 0 : start;
    end = isNaN(end) ? arr.length : end;

    function processNegativeIndex(arg) {
        return arg < 0 ? arg + arr.length : arg;
    }

    start = processNegativeIndex(start);
    end = processNegativeIndex(end);
    
    for (start; start < end; start++) {
        resultArr.push(arr[start]);
    }

    return resultArr;
}

module.exports = analogSlice;
