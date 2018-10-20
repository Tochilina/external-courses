'use strict';

var initialValueExist = {
    YES: 0,
    NO: 1
  };

function analogReduce(array, callback, initialValue) {
    var i = initialValue ? initialValueExist.YES : initialValueExist.NO;
    var previousValue = initialValue ? initialValue : array[0];

    for(; i < array.length; i++) {
        previousValue = callback(previousValue,array[i], i, array);
    }

    return previousValue;
}

module.exports = analogReduce;
