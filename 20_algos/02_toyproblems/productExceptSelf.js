// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

const productExceptSelf = (arr) => {
	const product = [];
	let valToMultiply = 1;

	for(const [i, val] of arr.entries()){
		product[i] = valToMultiply;
		valToMultiply *= arr[i];
	}

	valToMultiply = 1;
	for(let i = product.length-1; i>=0; i--){
		product[i] = product[i] * valToMultiply;
		valToMultiply *= arr[i];
	}
	return product;
}

console.log(productExceptSelf([1,2,3,4]));//[ 24, 12, 8, 6 ]