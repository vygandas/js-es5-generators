const mocha = require('mocha');
const it = mocha.it;
const describe = mocha.describe;
const assert = require('assert');

const generator = require('../../src/generators/generator');

const dummySeq = require('../../src/sequencers/dummySeq');
const factorialSeq = require('../../src/sequencers/factorialSeq');
const fibonacciSeq = require('../../src/sequencers/fibonacciSeq');
const rangeSeq = require('../../src/sequencers/rangeSeq');
const primeSeq = require('../../src/sequencers/primeSeq');
const partialSumSeq = require('../../src/sequencers/partialSumSeq');

describe('Generator', () => {

    it('sequencer dummySeq should generate values with "dummy" text everytime', () => {
        var seq = generator(dummySeq);
        assert.equal(seq.next(), 'dummy');
        assert.equal(seq.next(), 'dummy');
        assert.equal(seq.next(), 'dummy');
    });

    it('sequencer factorialSeq should generate factorials', () => {
        var seq = generator(factorialSeq);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 2);
        assert.equal(seq.next(), 6);
        assert.equal(seq.next(), 24);
    });

    it('sequencer fibonacciSeq should generate fibonacci', () => {
        var seq = generator(fibonacciSeq);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 2);
        assert.equal(seq.next(), 3);
        assert.equal(seq.next(), 5);
        assert.equal(seq.next(), 8);
    });

    it('sequencer rangeSeq should generate 1,3,5,7... when params are 1, 2', () => {
        var seq = generator(rangeSeq, 1, 2);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 3);
        assert.equal(seq.next(), 5);
        assert.equal(seq.next(), 7);
    });

    it('sequencer primeSeq should generate 2,3,5,7,11,13...', () => {
        var seq = generator(primeSeq, 1, 2);
        assert.equal(seq.next(), 2);
        assert.equal(seq.next(), 3);
        assert.equal(seq.next(), 5);
        assert.equal(seq.next(), 7);
        assert.equal(seq.next(), 11);
        assert.equal(seq.next(), 13);
    });

    it('sequencer partialSumSeq should generate 1,4,11,13,13, end... with parameters (1,3,7,2,0)', () => {
        var seq = generator(partialSumSeq, 1, 3, 7, 2, 0);
        assert.equal(seq.next(), 1);
        assert.equal(seq.next(), 4);
        assert.equal(seq.next(), 11);
        assert.equal(seq.next(), 13);
        assert.equal(seq.next(), 13);
        assert.throws(function () { seq.next() }, Error, "Error thrown");
    });

});
