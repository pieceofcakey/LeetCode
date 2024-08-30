/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function (score) {
  const price = ["mask", "Gold Medal", "Silver Medal", "Bronze Medal"];
  const answer = new Array(score.length);
  const map = new Map();
  const tset = new Set(score);

  const sortedArray = Array.from(tset).sort((a, b) => b - a);

  let order = 1;

  for (const num of sortedArray) {
    map.set(num, order++);
  }

  for (let i = 0; i < score.length; i++) {
    const value = map.get(score[i]);
    if (value <= 3) {
      answer[i] = price[value];
    } else {
      answer[i] = value.toString();
    }
  }

  return answer;
}
