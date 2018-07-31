module.exports = function sumAccumulator() {
    var sum = 0;
    return function(value) {
      sum += value;
      return sum;
    };
}