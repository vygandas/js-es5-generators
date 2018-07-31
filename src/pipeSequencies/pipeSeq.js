var _functions = {};

module.exports = function pipeSeq(sequencer) {
    var scope = this;
    scope._args = Array.from(arguments);
    _functions = {};
    scope._sequencer = sequencer.apply(scope, scope._args);
    
    scope._accumulate = function(value) {
        return function () {
            var val = value();
            Object.keys(_functions).map(function (key) {
                if (typeof _functions[key] !== typeof undefined) {
                    val = _functions[key](val);
                }
            });
            return val;
        };
    }

    scope.pipeline = function(accumulator) {
        if (typeof accumulator === 'function') { 
            var index = Object.keys(_functions).length;
            _functions[String(index) + '_' + accumulator.name] = accumulator();
        } else {
            throw new Error('Accumulator must be function!');
        }
        return scope;
    };

    scope.invoke = function() {

        return function() {

            return scope._accumulate(scope._sequencer);
        }

    };

    return scope;
};