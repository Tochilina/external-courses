"use strict";

function addPropertyOfObj(str, obj) {
    var object = obj;
    if (!object.hasOwnProperty(str)) {
        object[str] = 'new';
    }

    return obj;
}

module.exports = addPropertyOfObj;
