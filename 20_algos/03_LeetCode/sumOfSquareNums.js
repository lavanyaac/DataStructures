/////////////////////////////////////////////////////////////////////////////////////////////////////////
//14. Sum of Square Nums
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:
// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:
// Input: 3
// Output: False
/**
 * @param {number} c
 * @return {boolean}
 */
const SquareSum = function(c) {
	let start = 0;
	let end = Math.floor(Math.sqrt(c));
	while(start<=end){
		const sum = start * start + end * end;
		if(sum === c){
			return true;
		}
		if(sum > c){
			--end;
		}else{
			++start;
		}
	}
	return false;
}

console.log(SquareSum(5));//true
console.log(SquareSum(6));//false
console.log(SquareSum(25));//true