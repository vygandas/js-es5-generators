module.exports = function incrementBy(n) {
    return function(value) {
        return parseInt(value) + parseInt(n);
    };
}
