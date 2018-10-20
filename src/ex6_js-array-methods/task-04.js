'use strict';

function analogFilter(array, callback) {
    var i;
    var resultArr = [];

    for(i = 0; i < array.length; i++) {
        if(callback(array[i], i, array) === true) {
            resultArr.push(array[i]);
        }
    }

    return resultArr;
}

module.exports = analogFilter;
