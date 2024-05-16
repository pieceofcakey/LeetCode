/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    let fizzBuzzString = "";

    if (i % 3 === 0) {
      fizzBuzzString += "Fizz";
    }

    if (i % 5 === 0) {
      fizzBuzzString += "Buzz";
    }

    answer.push(fizzBuzzString.length ? fizzBuzzString : i.toString());
  }

  return answer;
};
