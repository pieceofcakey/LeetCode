/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  if (nums.length === 1) {
    return [`${nums[0]}`];
  }
  if (nums.length === 0) {
    return [];
  }

  let check = [nums[0], nums[0]];
  const result = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== check[1] + 1) {
      check[0] === check[1]
        ? result.push(`${check[0]}`)
        : result.push(check.join("->"));

      check = [nums[i], nums[i]];
    } else {
      check[1] = nums[i];
    }

    if (i === nums.length - 1) {
      check[0] === check[1]
        ? result.push(`${check[0]}`)
        : result.push(check.join("->"));
    }
  }

  return result;
};
