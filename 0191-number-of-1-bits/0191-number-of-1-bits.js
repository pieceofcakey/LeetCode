/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function (n) {
  const binaryN = n.toString(2);
  let bit = 0;

  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] === "1") {
      bit++;
    }
  }

  return bit;
};
