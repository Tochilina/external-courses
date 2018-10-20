'use strict';

function analogEvery(array, callback) {
    var i;

    for(i = 0; i < array.length; i++) {
        if(callback(array[i], i, array) !== true) {
            return false;
        }
    }

    return true;
}

module.exports = analogEvery;
