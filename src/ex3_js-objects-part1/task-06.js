"use strict";

function deepСlone(obj) {
    var clone;

    if (obj.constructor === Array) {
        clone = [];
        for (var i = 0; i < obj.length; i++) {
            clone[i] = deepСlone(obj[i]);
        }
    } else {
        clone = {};
    }

    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            clone[key] = deepСlone(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }

    return clone;
}

module.exports = deepСlone;
