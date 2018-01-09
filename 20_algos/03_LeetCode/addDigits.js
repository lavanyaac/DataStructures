// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  return 1+(num-1)%9;
};

console.log(addDigits(38));//2
console.log(addDigits(0));//0
console.log(addDigits(2));//2


const addDigitsRecur = function(num){
	let sum = 0;
	const s = num.toString();
	for(i=0; i<s.length; i++){
		sum += parseInt(s[i]);
	}
	if(sum<10){
		return sum;
	}else{
		return addDigitsRecur(sum);
	}
}

console.log(addDigitsRecur(38));//2
console.log(addDigitsRecur(0));//0
console.log(addDigitsRecur(2));//2