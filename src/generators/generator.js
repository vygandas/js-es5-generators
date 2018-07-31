module.exports = function generator(sequencer) {
    this.arguments = arguments;
    const s = sequencer.bind(this);
    return {
        next: s()
    };
}