/**
 * Input: c = 5
 * Output: true
 * Explanation: 1 * 1 + 2 * 2 = 5
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let left = 0; 
    let right = parseInt(Math.sqrt(c))
    while(left<= right){
        if((left*left)+(right*right) === c) {
            return true
        } else if((left*left)+(right*right) < c) {
            left++
        } else if((left*left)+(right*right) > c) {
            right--
        }
    }
    return false
};