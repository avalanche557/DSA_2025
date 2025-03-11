/**
 * Input: nums = [3,2,3]
 * Output: 3
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res= new Map()
    let max_count = 0
    let output = 0
    for(let i = 0; i < nums.length; i++){
        if(res.has(nums[i])){
            res.set(nums[i], res.get(nums[i])+1)
        } else {
             res.set(nums[i],1)
        }
    }
    console.log(res)
    for (const [key, value] of res){
        if(value > max_count) {
            output = key
            max_count = value
        }
    }
    return output
};