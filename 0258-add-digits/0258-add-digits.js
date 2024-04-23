/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  const numArray = num.toString().split("");
  let answer = 0;

  for (let i = 0; i < numArray.length; i++) {
    answer += Number(numArray[i]);
  }

  if (answer.toString().length === 1) {
    return answer;
  }

  return addDigits(answer);
};
