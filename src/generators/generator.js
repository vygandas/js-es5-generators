module.exports = function generator(sequencer) {
    return {
        next: sequencer.apply(this, Array.from(arguments).filter(function(a, i) { return i > 0 }))
    };
}