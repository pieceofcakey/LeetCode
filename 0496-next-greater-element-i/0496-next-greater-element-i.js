/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
  let answer = [];

  for (num of nums1) {
    let counter = -1;
    for (let i = nums2.indexOf(num); i < nums2.length; i++) {
      if (nums2[i] > num) {
        counter = nums2[i];
        break;
      }
    }
    answer.push(counter);
  }
  return answer;
};
