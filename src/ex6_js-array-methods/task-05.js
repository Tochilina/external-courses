'use strict';

function analogMap(array, callback) {
    var i;
    var resultArr = [];

    for(i = 0; i < array.length; i++) {
        resultArr.push(callback(array[i], i, array));
    }

    return resultArr;
}

module.exports = analogMap;
