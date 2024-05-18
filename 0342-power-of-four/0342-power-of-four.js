/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
  let copiedN = n;

  if (copiedN === 0) {
    return false;
  }

  while (copiedN % 4 === 0) {
    copiedN = copiedN / 4;
  }

  return copiedN === 1;
};
