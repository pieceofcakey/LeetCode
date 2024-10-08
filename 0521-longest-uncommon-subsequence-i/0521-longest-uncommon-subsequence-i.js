/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = function (a, b) {
  const iResult = a == b ? -1 : Math.max(a.length, b.length);

  return iResult;
};
