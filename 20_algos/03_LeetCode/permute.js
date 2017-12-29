/////////////////////////////////////////////////////////////////////////////////////////////////////////
//2. Permutations
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a collection of distinct numbers, return all possible permutations.
// For example,
// [1,2,3] have the following permutations:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 //This works for nums without duplicates
const permute1 = function(nums) {
	const results = [];
	permuteHelper(nums, 0, nums.length-1);
	return results;

	function permuteHelper(arr, pos){
		if(pos === arr.length){
			results.push(arr.slice());			
		}else{
			for(let i = pos; i<arr.length; i++){
				[arr[pos], arr[i]] = [arr[i], arr[pos]];
				permuteHelper(arr, pos+1);
				[arr[pos], arr[i]] = [arr[i], arr[pos]];
			}
		}
	}
}

// console.log(permute1([1,2,2]));


const permute = function(nums){
	const results = [];
	permuteHelper(nums, [], results, nums.length);
	return results;

	function permuteHelper(arr, itemArr, results, n){
		if(itemArr.length === n){
			results.push(itemArr.slice());
		}else{
			for(let i = 0; i<n; i++){
				if(itemArr.includes(arr[i])){
					continue;
				}
				itemArr.push(arr[i]);
				permuteHelper(arr, itemArr, results, n);
				itemArr.pop();
			}
		}
	}
} 
console.log(permute([1,2,3]));
