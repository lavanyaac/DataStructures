/////////////////////////////////////////////////////////////////////////////////////////////////////////
//1. Two Sum
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target){
	const remaining = {};

	for(const [i, val] of nums.entries()){
		const remainVal = (target-val).toString();

		if(remaining[val] !== undefined){
			return [remaining[val], i];
		}
		remaining[remainVal] = i;
	}
	return null;
}

const nums = [2, 7, 11, 15]
const target = 17

console.log(twoSum(nums, target));//[0, 3]