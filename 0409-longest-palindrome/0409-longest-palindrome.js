/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const keys = {};
  let longest = 0;

  for (const char of s) {
    keys[char] = (keys[char] || 0) + 1;

    if (keys[char] % 2 == 0) {
      longest += 2;
    }
  }

  return s.length > longest ? longest + 1 : longest;
};
