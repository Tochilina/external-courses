"use strict";

function showArray(arr) {
    var i;

    for (i = 0; i < arr.length; i++) {
        console.log("Element ", i, ":", arr[i]);
    }

    console.log("Leghth of array: ", arr.length);
    return;
}

module.exports = showArray;
