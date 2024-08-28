/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
  let answer = 0;

  nums.sort((a, b) => a - b);

  for (i = 0; i < nums.length; i += 2) {
    answer += nums[i];
  }

  return answer;
};
