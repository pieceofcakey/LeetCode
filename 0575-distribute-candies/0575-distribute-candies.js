/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = function (candyType) {
  const candySet = new Set();

  for (const type of candyType) {
    candySet.add(type);
  }

  return Math.min(candySet.size, candyType.length / 2);
};
