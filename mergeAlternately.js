/**
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let maxLengthWord = word1.length > word2.length ? word1 : word2
    let output = ""
    for(let i = 0;i < maxLengthWord.length ; i++){
        if(word1[i]){
            output = output+word1[i]
        }
         if(word2[i]){
            output = output+word2[i]
        }
    }
    return output
    

};