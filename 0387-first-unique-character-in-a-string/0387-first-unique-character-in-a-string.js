/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const uniqueCharacters = {};
  let r;

  for (let i = 0; i < s.length; i++) {
    uniqueCharacters[s[i]] == undefined
      ? (uniqueCharacters[s[i]] = 1)
      : (uniqueCharacters[s[i]] += 1);
  }

  for (let [key, value] of Object.entries(uniqueCharacters)) {
    if (value === 1) {
      r = key;
      
      break;
    }
  }

  return s.indexOf(r);
};
