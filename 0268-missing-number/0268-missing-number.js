/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  const length = nums.length;

  if (length === 0) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < length; i++) {
    result += nums[i] - i;
  }

  return length - result;
};