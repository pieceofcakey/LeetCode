/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const answer = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Set.has(nums2[i])) {
      answer.add(nums2[i]);
    }
  }

  return [...answer];
};
