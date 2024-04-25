/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  const sArray = s.split("").sort();
  const tArray = t.split("").sort();
  
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] != tArray[i]) {
      return tArray[i];
    }
  }

  return tArray[tArray.length - 1];
};
