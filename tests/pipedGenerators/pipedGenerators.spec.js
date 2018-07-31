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

});