"use strict";

function defineType(value) {
  var type_value = typeof value;
  var result = undefined;

  switch (type_value) {
    case 'string':
      result = 'string';
      break;
    case 'number':
      result = 'number';
      break;
    default:
      break;
  }

  return result;
}

module.exports = defineType;
