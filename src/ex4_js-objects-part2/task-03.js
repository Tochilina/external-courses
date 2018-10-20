"use strict";

function deleteSpace(str) {
    return str.replace(/^[\s]+|[\s]+$/g, '');
}

module.exports = deleteSpace;
