/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentSymbol = romanNumerals[s[i]];
    const nextSymbol = romanNumerals[s[i + 1]];

    if (nextSymbol && currentSymbol < nextSymbol) {
      result -= currentSymbol;
    } else {
      result += currentSymbol;
    }
  }

  return result;
};