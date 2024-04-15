/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
  if (n <= 0) {
    return false;
  }

  let copiedN = n;

  while (n > 0) {
    if (n === 1) {
      return true;
    }

    n /= 3;
  }

  return false;
};