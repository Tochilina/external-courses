"use strict";

var Animals = {
    vid: 'Mammals',
    numberOfSpecies: 20000
};

var zebra = Object.create(Animals);

zebra.vid = "four - legged";

function searchInPrototypes(prop, obj) {
    return obj.__proto__[prop];
}


searchInPrototypes('vid', zebra);
module.exports = searchInPrototypes;