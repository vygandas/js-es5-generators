module.exports = function stepLimiter(stepsLimit) {
    var step = 0;
    return function(value) {
        if (step++ < stepsLimit) {
            return value;
        } else {
            throw new Error('Steps limit exceeded.');
        }
    };
}
