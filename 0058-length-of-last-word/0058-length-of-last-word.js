/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const array = s.split(' ');
    const filteredArray = array.filter((el) => el !== '');
    
    return filteredArray[filteredArray.length - 1].length;
};