/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let result = "";

  for (let i = 0; i < strs[0].length; i++) {
    let isAllSame = false;

    for (let j = 0; j < strs.length; j++) {
      isAllSame = strs[j][i] === strs[0][i];

      if (!isAllSame) {
        return result;
      }
    }

    if (isAllSame) {
      result += strs[0][i];
    }
  }
  return result;
};
