/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const temp = [];
  let previousNumber = 0;
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (previousNumber < nums[i] || i == 0) {
      temp[index] = nums[i];
      previousNumber = temp[index++];
    } else {
      previousNumber = temp[index - 1];
    }
  }

  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  return index;
};
