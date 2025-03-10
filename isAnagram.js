/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false
    }
    let charCountForS = new Array(26).fill(0)
    let charCountForT = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++){
        charCountForS[s[i].charCodeAt(0) - 97] += 1
        charCountForT[t[i].charCodeAt(0) - 97] += 1
    }
    if(charCountForS.join("") === charCountForT.join("")){
        return true
    }
    return false

};