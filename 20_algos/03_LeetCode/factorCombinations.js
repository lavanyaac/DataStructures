/////////////////////////////////////////////////////////////////////////////////////////////////////////
//12. Factor Combinations
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Numbers can be regarded as product of its factors. For example,

// 8 = 2 x 2 x 2;
//   = 2 x 4.
// Write a function that takes an integer n and return all possible combinations of its factors.

// Note: 
// You may assume that n is always positive.
// Factors should be greater than 1 and less than n.
/**
 * @param {number} n
 * @return {number[][]}
 */
const getFactors = function(n) {
	const results = [];
	const subRes = [];
	const start = 2;
	helper(results, subRes, n, start);
	return results;

	function helper(resultsArr, subArr, n, start){
		if(n<=1){
			if(subArr.length > 1){
				resultsArr.push(subArr.slice());
			}
			return;
		}
		for(let i = start; i<=n; i++){
			subArr.push(i);
			helper(resultsArr, subArr, n/i, i);
			subArr.pop();
		}
	}
};
console.log(getFactors(12));//[ [ 2, 2, 3 ], [ 2, 6 ], [ 3, 4 ] ]
console.log(getFactors(8));//[ [ 2, 2, 2 ], [ 2, 4 ] ]