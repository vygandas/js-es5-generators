const isPrime = require('../math/isPrime').isPrime;

module.exports = function primeSeq() {
    var current = 1;
    return function() {
        for (var i = current + 1; ; i++) {
            if (isPrime(i)) {
                current = i;
                return i;
            }
        }
        return null;
    }
}