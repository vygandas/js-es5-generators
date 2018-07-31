module.exports.fibonacci = function fibonacci(num, memo = {}) {
    memo = memo || {};
    if (typeof memo[num] !== typeof undefined) return memo[num];
    if (num <= 1) return 1;
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
