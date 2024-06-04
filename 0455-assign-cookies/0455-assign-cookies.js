/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
  const compare = function (a, b) {
    return b - a;
  };

  g.sort(compare);
  s.sort(compare);

  let j = 0;

  for (var i = 0; i < g.length; i++) {
    if (g[i] <= s[j]) {
      j++;
    }
  }

  return j;
};
