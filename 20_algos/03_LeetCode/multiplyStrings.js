// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.

// Note:

// The length of both num1 and num2 is < 110.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
	
	const m = num1.length;
	const n = num2.length;
	const product = new Array(m+n).fill(0);

	for(let i = m-1; i>=0; i--){
		for(let j = n-1; j>=0; j--){
			const mul = (parseInt(num1[i])) * (parseInt(num2[j]));
			const p1 = i+j;
			const p2 = i+j+1;
			const sum = product[p2] + mul;
			product[p2] = sum%10;
			product[p1] += Math.floor(sum/10);
		}
	}
	let res = product.join('');
	while(res){
		if(res[0] === '0' && res.length > 1){
			res = res.slice(1);
		}else{
			break;
		}
	}
	return res;
};

console.log(multiply('000', '0'));//131544

