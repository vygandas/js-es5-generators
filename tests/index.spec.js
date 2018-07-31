const mocha = require('mocha');
const it = mocha.it;
const describe = mocha.describe;
const assert = require('assert');

const getHelloText = require('../src/index').getHelloText;

describe('Main Index', () => {

    it('should print text "Hello World!"', () => {
        assert.equal(getHelloText(), 'Hello World!', 'Index method getHelloText returns correct text');
    });

});
