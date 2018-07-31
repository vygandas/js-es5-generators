const mocha = require('mocha');
const it = mocha.it;
const describe = mocha.describe;
const assert = require('assert');

const generator = require('../../src/generators/generator');

const pipeSeq = require('../../src/pipeSequencies/pipeSeq');

const dummySeq = require('../../src/sequencers/dummySeq');
const factorialSeq = require('../../src/sequencers/factorialSeq');
const fibonacciSeq = require('../../src/sequencers/fibonacciSeq');
const rangeSeq = require('../../src/sequencers/rangeSeq');
const primeSeq = require('../../src/sequencers/primeSeq');
const partialSumSeq = require('../../src/sequencers/partialSumSeq');

const sumAccumulator = require('../../src/accumulators/sumAccumulator');
const isEven = require('../../src/accumulators/isEven');

describe('Generator with pipe', () => {

    it('should generate correct accumulated values when using rangeSeq sequence', () => {
        var pipedSeq = pipeSeq(rangeSeq, 2, 3) // 2, 5, 8, 11
            .pipeline(sumAccumulator) // 2, 7 (5+2), 15(7+8), 26(15+11)
            .invoke();
        var seq = generator(pipedSeq);
        assert.equal(seq.next(), 2);
        assert.equal(seq.next(), 7);
        assert.equal(seq.next(), 15);
        assert.equal(seq.next(), 26);
    });

    it('should generate accumulated values and check if they are even or not', () => {
        var pipedSeq = pipeSeq(rangeSeq, 2, 3) // 2, 5, 8, 11
            .pipeline(sumAccumulator) // 2, 7 (5+2), 15(7+8), 26(15+11)
            .pipeline(isEven)
            .invoke();
        var seq = generator(pipedSeq);
        var t = seq.next();
        assert.equal(t.status, true);
        assert.equal(t.number, 2);
        var t = seq.next();
        assert.equal(t.status, false);
        assert.equal(t.number, 7);
        var t = seq.next();
        assert.equal(t.status, false);
        assert.equal(t.number, 15);
        var t = seq.next();
        assert.equal(t.status, true);
        assert.equal(t.number, 26);
    });

});