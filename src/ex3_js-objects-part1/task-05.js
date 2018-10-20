"use strict";

function copyObject(obj) {
    var key;
    var copy = {};

    for (key in obj) { 
        if(obj.hasOwnProperty(key)) {
            copy[key] = obj[key];
        }
    }

    return copy;
}

module.exports = copyObject;
