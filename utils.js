"use strict";
//utility functions for the app

export function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex] = value;
        }
    }
    return result;
}

module.exports = arrayFilter;

console.log("utils.js loaded");