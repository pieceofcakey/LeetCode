/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const reg = /[^a-zA-Z|0-9]/gim;
  s = s.replace(reg, "").toLowerCase();

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }

  return true;
};
