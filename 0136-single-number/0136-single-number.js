/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      hashMap[nums[i]]++;
      
      continue;
    }

    hashMap[nums[i]] = 1;
  }

  for (let key in hashMap) {
    if (hashMap[key] === 1) {
      return Number(key);
    }
  }
};
