/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let answer = 0;

  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  for (let i = 0; i < columnTitle.length; i++) {
    answer +=
      (alphabetArray.indexOf(columnTitle[i]) + 1) *
      Math.pow(26, columnTitle.length - i - 1);
  }

  return answer;
};
