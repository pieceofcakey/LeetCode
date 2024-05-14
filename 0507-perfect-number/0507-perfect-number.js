/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function (num) {
  if (num == 1) {
    return false;
  }

  const max = parseInt(Math.sqrt(num));
  let sum = 1;

  for (let i = 2; i <= max; i++) {
    if (num % i == 0) {
      sum += i + num / i;
    }
  }
  
  return num == sum;
};
