module.exports = function pipeSeq(sequencer) {
    var _functions = {};
    var scope = this;
    scope._args = Array.prototype.slice.call(arguments, 1);
    scope._sequencer = sequencer.apply(undefined, scope._args);
    
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
        const args = Array.prototype.slice.call(arguments, 1);
        if (typeof accumulator === 'function') {
            var index = Object.keys(_functions).length;
            _functions[String(index) + '_' + accumulator.name] = accumulator.call(undefined, args);
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

    scope.addLimit = function(limiter) {
        const args = Array.prototype.slice.call(arguments, 1);
        if (typeof limiter === 'function') {
            var index = Object.keys(_functions).length;
            _functions[String(index) + '_' + limiter.name] = limiter.call(undefined, args);
        } else {
            throw new Error('Limiter must be function!');
        }
        return scope;
    };

    return scope;
};
