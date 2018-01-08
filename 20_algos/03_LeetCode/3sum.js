// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	nums.sort((a,b)=>{
		return a-b;
	});
	let res = [];
	for(let i = 0; i < nums.length-2; i++){
		if(i === 0 || nums[i] !== nums[i-1]){
			let j = i+1;
			let k = nums.length-1;
			while(j<k){
				const sum = nums[i] + nums[j] + nums[k];
				if(sum === 0){
					res.push([nums[i], nums[j], nums[k]]);
					++j;
					--k;
					while(j < k && nums[j] === nums[j-1]){
						++j;
					}
					while(j < k && nums[k] === nums[k+1]){
						--k;
					}
				}else if(sum > 0){
					--k;
				}else{
					++j;
				}
			}
		}
	}
	return res;
}

const S = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(S));//[ [ -1, -1, 2 ], [ -1, 0, 1 ] ]