/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = {}
    for (string of strs){
        let count = new Array(26).fill(0)
        for(char of string) {
            let index = char.charCodeAt(0) - "a".charCodeAt(0)
            count[index] += 1
        }
        let key = count.join(",")
        if(!result[key]) {
            result[key] = []
        } 
        result[key].push(string)
    }
    return Object.values(result)
};