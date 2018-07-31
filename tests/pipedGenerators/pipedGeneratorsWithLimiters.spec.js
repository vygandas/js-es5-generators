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
const incrementBy = require('../../src/accumulators/incrementBy');

const stepLimiter = require('../../src/limiters/stepLimiter');
const resultLimiter = require('../../src/limiters/resultLimiter');

describe('Generator with pipe and limiter', () => {

    it('should be correct with primeSeq and stepLimiter', () => {
        var pipedSeq = pipeSeq(primeSeq) 
            .addLimit(stepLimiter, 2)
            .invoke();
        var seq = generator(pipedSeq);
        assert.equal(seq.next(), 2);
        assert.equal(seq.next(), 3);
        assert.throws(function () { seq.next() }, Error, "Error thrown");
        assert.throws(function () { seq.next() }, Error, "Error thrown");
    });

    it('should be correct with primeSeq, resultLimiter and stepLimiter', () => {
        var pipedSeq = pipeSeq(primeSeq) 
            .addLimit(stepLimiter, 5)
            .addLimit(resultLimiter, 5)
            .invoke();
        var seq = generator(pipedSeq);
        assert.equal(seq.next(), 2);
        assert.equal(seq.next(), 3);
        assert.equal(seq.next(), 5);
        assert.throws(function () { seq.next() }, Error, "Error thrown");
        assert.throws(function () { seq.next() }, Error, "Error thrown");
    });

    it('should be correct with partialSumSeq 1, 3, 7, 2, 0', () => {
        var pipedSeq = pipeSeq(partialSumSeq, 1, 3, 7, 2, 0) 
        .addLimit(resultLimiter, 1) 
        .addLimit(stepLimiter, 3)
        .invoke();
        var seq = generator(pipedSeq);
        
        assert.equal(seq.next(), 1);
        assert.throws(function () { seq.next() }, Error, "Error thrown");
        assert.throws(function () { seq.next() }, Error, "Error thrown");
        assert.throws(function () { seq.next() }, Error, "Error thrown");
    });
});