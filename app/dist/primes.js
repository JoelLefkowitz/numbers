"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrime = void 0;
var getPrime = function () {
    var inputs = document.getElementById("prime-input");
    var n = inputs.value;
    fetch('http://localhost:3000/numbers', {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            primeNumber: n,
        })
    })
        .then(function (response) { return response.text(); })
        .then(function (response) {
        document.getElementById("prime-result").innerHTML = response;
    })
        .catch(function (err) { return console.log(err); });
};
exports.getPrime = getPrime;
//# sourceMappingURL=primes.js.map