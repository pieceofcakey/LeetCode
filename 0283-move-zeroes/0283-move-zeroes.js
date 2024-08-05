/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let index = 0;
  let copiedNums = nums;

  for (let i = 0; i < nums.length; i++) {
    if (copiedNums[i] !== 0) {
      copiedNums[index] = copiedNums[i];

      if (index !== i) {
        copiedNums[i] = 0;
      }

      index++;
    }
  }
};