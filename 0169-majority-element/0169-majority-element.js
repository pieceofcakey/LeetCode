/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const numsObject = {};

  nums.forEach((num) => {
    if (!numsObject[num]) {
      numsObject[num] = 1;
    } else {
      numsObject[num]++;
    }
  });

  const maxCount = Math.max(...Object.values(numsObject));

  for (let num in numsObject) {
    if (numsObject[num] === maxCount) {
      return num;
    }
  }
};

