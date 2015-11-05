"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = addAssertions;

function addAssertions(tape, assertions) {
    return function (testName, testBody) {
        return tape(testName, function (t) {
            for (var prop in assertions) {
                t[prop] = assertions[prop].bind(t);
            }
            testBody.call(this, t);
        });
    };
}

module.exports = exports["default"];