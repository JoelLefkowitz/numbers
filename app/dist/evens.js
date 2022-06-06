"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEven = void 0;
var getEven = function () {
    var input = document.getElementById("even-input");
    var n = input.value;
    fetch('http://localhost:3000/numbers', {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            evenNumber: n,
        })
    })
        .then(function (response) { return response.text(); })
        .then(function (response) {
        document.getElementById("even-result").innerHTML = response;
    })
        .catch(function (err) { return console.log(err); });
};
exports.getEven = getEven;
//# sourceMappingURL=evens.js.map