/////////////////////////////////////////
//17. Valid Perfect Square
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Returns: True
// Example 2:

// Input: 14
// Returns: False
/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
	let start = 0;
	let end = num;
	while(start <= end){
		const mid = Math.floor((start+end)/2);
		const squaredNum = mid * mid;
		if(squaredNum === num){
			return true;
		}
		if(squaredNum > num){
			end = mid - 1;
		}else{
			start = mid + 1;
		}
	}
	return false;
}

console.log(isPerfectSquare(9));//true