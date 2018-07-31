function getHelloText() {
    return "Hello World!";
}

module.exports = {
    getHelloText: getHelloText
};

console.log(getHelloText());




const generator = require('./generators/generator');

const pipeSeq = require('./pipeSequencies/pipeSeq');

const dummySeq = require('./sequencers/dummySeq');
const factorialSeq = require('./sequencers/factorialSeq');
const fibonacciSeq = require('./sequencers/fibonacciSeq');
const rangeSeq = require('./sequencers/rangeSeq');
const primeSeq = require('./sequencers/primeSeq');
const partialSumSeq = require('./sequencers/partialSumSeq');

const sumAccumulator = require('./accumulators/sumAccumulator');


var pipedSeq = pipeSeq(rangeSeq, 2, 3) // 2, 5, 8, 11
    .pipeline(sumAccumulator) // 2, 7 (5+2), 15(7+8), 26(15+11)
    .invoke();
var seq = generator(pipedSeq);
console.log(seq.next(), 2);
console.log(seq.next(), 7);
console.log(seq.next(), 15);
console.log(seq.next(), 26);