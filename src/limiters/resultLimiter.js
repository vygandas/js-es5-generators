module.exports = function resultLimiter(max) {
    return function(value) {
        if (value <= max) {
            return value;
        } else {
            throw new Error('Max value exceeded.');
        }
    };
}
