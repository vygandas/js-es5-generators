module.exports = function isEven() {
    return function(value) {
      return {
          status: value % 2 === 0,
          number: value
      };
    };
}