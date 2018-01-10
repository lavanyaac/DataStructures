// The set [1,2,3,…,n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order,
// We get the following sequence (ie, for n = 3):

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Note: Given n will be between 1 and 9 inclusive.


const getPermuatation = function(n, k){
	const factorial = generateFactorial(n);
	const numbers = Array(n).fill().map((v,i) => {return i+1});
	let kth = '';

	--k;
	for(i = 1; i <= n; i++){
		const index = Math.floor(k / factorial[n-i]);
		kth += numbers[index];
		numbers.splice(index, 1);
		k = k - (index * factorial[n-i]);
	}

	return kth;
}

function generateFactorial(n){
	let sum = 1;
	let factorials = [1];
	for(i = 1; i <= n; i++){
		sum *= i;
		factorials[i] = sum;
	}
	return factorials
}


console.log(getPermuatation(4, 14));//3142