// 53. Maximum Subarray

// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
	const t = [];	
	t.push(nums[0]);

	let max = nums[0];

	for(let i = 1; i < nums.length; i++){
		t[i] = t[i-1] > 0 ? t[i-1] + nums[i] : nums[i];
		max = Math.max(max, t[i])
	}
	return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); //6