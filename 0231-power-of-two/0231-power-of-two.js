/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }

  const result = parseInt(n & (n - 1));

  return result === 0 ? true : false;
};
