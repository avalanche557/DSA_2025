/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let countObj = new Map();
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if(countObj.has(nums[i])){
            return [countObj.get(nums[i]), i]
        } else {
            countObj.set(diff, i)
        }
    }
};