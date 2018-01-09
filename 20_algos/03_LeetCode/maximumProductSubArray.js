// 152. Maximum Product Subarray
// Find the contiguous subarray within an array (containing at least one number) which has the largest product
// For example, given the array [2,3,-2,4],
// the contiguous subarray [2,3] has the largest product = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
	let max = nums[0];
	let imax = nums[0];
	let imin = nums[0];

	for(let i = 1; i<nums.length; i++){
		if(nums[i] < 0){
			[imax, imin] = [imin, imax];
		}
			imax = Math.max(nums[i], imax*nums[i]);
			imin = Math.max(nums[i], imin*nums[i]);
			max = Math.max(imax, max);
	}
	return max;
}

console.log(maxProduct([2,3,-2,4]));//6