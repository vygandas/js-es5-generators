module.exports = function partialSumSeq() {
    const numbers = Array.from(arguments);
    var sum = 0;
    var paramIndex = 0;
    return function() {
        if (typeof numbers[paramIndex] !== typeof undefined) {
            sum += numbers[paramIndex++];
            return sum;
        }
        else {
            throw new Error("Can't continue because there're not enough values passed to sum");
        }
    }
}