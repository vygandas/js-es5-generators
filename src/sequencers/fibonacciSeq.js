const fibonacci = require('../math/fibonacci').fibonacci;
module.exports = function fibonacciSeq() {
    var n = 0;
    return function() {
        return fibonacci(n++);
    }
}