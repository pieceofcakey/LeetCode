/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  if (s.length > t.length) {
    return false;
  }
  if (!s) {
    return true;
  }

  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i === s.length;
};
