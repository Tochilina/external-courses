"use strict";

function showObject(obj) {
    var key;
    for (key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log("Ключ: " + key + " значение: " + obj[key]);
        }
    }
}

module.exports = showObject;
