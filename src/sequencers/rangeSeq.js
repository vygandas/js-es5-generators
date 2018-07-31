function rangeSeqCalc(start, step) {
    return start + step;
}

module.exports = function rangeSeq() {
    // Validate and set start and step parameters
    var start = (typeof this.arguments !== typeof undefined
        && typeof this.arguments[1] !== typeof undefined)
            ? this.arguments[1]
            : 0;
    const step = (typeof this.arguments !== typeof undefined
        && typeof this.arguments[2] !== typeof undefined)
            ? this.arguments[2]
            : 1;
    // Helper variables
    var timesCalledCount = 0;
    var pos = start;

    return function() {
        // First time return initial value
        if (timesCalledCount++ === 0) return start;
        
        pos = rangeSeqCalc(pos, step);        
        return pos;
    }
}