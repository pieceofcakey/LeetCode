/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    n = n - i;
    count++;
  }

  return count;
};
