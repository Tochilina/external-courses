"use strict";

function searchSubstr(str, substrs) {
    if (~str.indexOf(substrs)) {
        return true;
    }

    return false;
}

module.exports = searchSubstr;
