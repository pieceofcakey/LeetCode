/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function (moves) {
  let x = 0;
  let y = 0;

  for (let move of moves) {
    if (move === "U") {
      y++;
    } else if (move === "D") {
      y--;
    } else if (move === "L") {
      x--;
    } else if (move === "R") {
      x++;
    }
  }

  return x === 0 && y === 0;
};
