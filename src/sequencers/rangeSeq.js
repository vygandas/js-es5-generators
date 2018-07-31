function rangeSeqCalc(_start, _step) {
    return _start + _step;
}

module.exports = function rangeSeq() {
    // Validate and set _start and _step parameters
    var _start = (typeof arguments !== typeof undefined
        && typeof arguments[1] !== typeof undefined)
            ? arguments[1]
            : 0;
    const _step = (typeof arguments !== typeof undefined
        && typeof arguments[2] !== typeof undefined)
            ? arguments[2]
            : 1;
    // Helper variables
    var timesCalledCount = 0;
    var pos = _start;

    return function() {
        // First time return initial value
        if (timesCalledCount++ === 0) return _start;
        
        pos = rangeSeqCalc(pos, _step);        
        return pos;
    }
}