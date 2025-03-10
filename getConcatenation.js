
//Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let output = new Array(nums.length);
    for(let i = 0; i< nums.length;i++) {
        output[i] = output[i+nums.length] = nums[i]
    }
    return output
};