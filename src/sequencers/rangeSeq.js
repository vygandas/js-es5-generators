function rangeSeqCalc(_start, _step) {
    return _start + _step;
}

module.exports = function rangeSeq(start, step) {
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