/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    
    const stringifiedX = String(x);
    const reversedX = stringifiedX.split('').reverse().join('');
    
    if (stringifiedX === reversedX) {
        return true;
    }
    
    return false;
};