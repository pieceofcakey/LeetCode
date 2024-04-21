/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const possibleWay = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      possibleWay[i] = 1;

      continue;
    }

    possibleWay[i] = possibleWay[i - 1] + possibleWay[i - 2];
  }

  return possibleWay[n];
};
