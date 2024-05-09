/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
  const binary = num.toString(2).split("");

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      binary[i] = "0";
    } else {
      binary[i] = "1";
    }
  }

  return parseInt(binary.join(""), 2);
};
