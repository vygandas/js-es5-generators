module.exports = function generator(sequencer) {
    return {
        next: sequencer.apply(this, Array.prototype.slice.call(arguments, 1))
    };
}