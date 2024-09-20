/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  const rowChars = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const charRowMap = rowChars.reduce((map, row, rowIndex) => {
    for (const char of row) {
      map[char] = rowIndex;
    }

    return map;
  }, {});

  return words.filter((word) => {
    const set = new Set();

    for (const char of word.toLowerCase()) {
      set.add(charRowMap[char]);
    }

    return set.size === 1;
  });
};
