const factorialize = require('../math/factorialize').factorialize;
module.exports = function factorialSeq() {
    var n = 0;
    return function() {
        return factorialize(n++);
    }
}