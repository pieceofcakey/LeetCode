/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  let stringifiedN = n.toString();
  const previousSum = [];

  while (true) {
    let sum = 0;

    for (let i = 0; i < stringifiedN.length; i++) {
      sum += Number(stringifiedN[i]) * Number(stringifiedN[i]);
    }

    if (sum === 1) {
      return true;
    }

    if (previousSum.includes(sum)) {
      return false;
    }

    previousSum.push(sum);
    stringifiedN = sum.toString();
  }
};