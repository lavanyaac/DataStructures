// 239. Sliding Window Maximum
// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// For example,
// Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Therefore, return the max sliding window as [3,3,5,5,6,7].

// Note: 
// You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.

// Follow up:
// Could you solve it in linear time?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
		if(!nums.length){
			return [];
		}
    const leftMax = new Array(nums.length);
    const rightMax = new Array(nums.length);

    leftMax[0] = nums[0];
    rightMax[nums.length - 1] = nums[nums.length-1];

    for(let i = 1; i<nums.length; i++){
    	leftMax[i] = (i % k === 0) ? nums[i] : Math.max(leftMax[i-1], nums[i]);

    	const j = nums.length - i - 1;
    	rightMax[j] = (j % k === 0) ? nums[j] : Math.max(rightMax[j+1], nums[j]);
    }

    const slidingMaximum = [];

    for(let i = 0, j = 0; i+k <= nums.length; i++, j++){
    	slidingMaximum[j] = Math.max(leftMax[i+k-1], rightMax[i]);
    }
    return slidingMaximum;
};

const nums = [1,3,-1,-3,5,3,6,7];
console.log(maxSlidingWindow(nums, 3));//[ 3, 3, 5, 5, 6, 7 ]