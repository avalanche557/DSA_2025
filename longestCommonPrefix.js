/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let min_length = strs[0].length;
    let output = ""
    for(let i = 1; i < strs.length; i++){
        if(strs[i].length < min_length) {
            min_length = strs[i].length
        }
    }
    let i = 0
    while (i < min_length){
        for(let s of strs){
            if(s[i] !== strs[0][i]){
                return s.slice(0,i)
            }
        }
        i++
    }
    return strs[0].slice(0,i)
};
