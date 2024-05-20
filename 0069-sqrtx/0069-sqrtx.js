/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let division = 0;

  while ((division + 1) * (division + 1) <= x) {
    division++;
  }
  return division;
};
