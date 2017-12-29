/////////////////////////////////////////////////////////////////////////////////////////////////////////
//13. Permutations2
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// For example,
// [1,1,2] have the following unique permutations:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
	const results = [];
	const subRes = [];
	helper(results, subRes, [], nums);
	return results;

	function helper(results, subResArr, usedArr, arr){
		if(subResArr.length === arr.length){
			results.push(subResArr.slice());
		}
		for(let i = 0; i<arr.length; i++){
			if(usedArr[i]){
				continue;
			}
			if(i>0 && arr[i] === arr[i-1] && !usedArr[i-1]){
				continue;
			}
			subResArr.push(arr[i]);
			usedArr[i] = true;
			helper(results, subResArr, usedArr, arr);
			subResArr.pop();
			usedArr[i] = false;
		}
	}
}

console.log(permuteUnique([1,1,2]));//[ [ 1, 1, 2 ], [ 1, 2, 1 ], [ 2, 1, 1 ] ]