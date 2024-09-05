/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  let seperatedWords = s.split(" ");

  seperatedWords = seperatedWords.map((el) => el.split("").reverse().join(""));
  seperatedWords = seperatedWords.join(" ");

  return seperatedWords;
};
