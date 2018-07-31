module.exports = function generator(sequencer) {
    const s = sequencer.apply(this, arguments);
    return {
        next: sequencer.apply(this, arguments)
    };
}