// Given an array of integers, output an array that contains the number of prime factor for each integer. 
//My solution gets too slow, but maybe it's just python is too slow for this problem.  

const primeFactors = function(num){
	const factors = [];

	while(num%2 === 0){
		num = num/2;
		factors.push(2);
	}

	for(let i = 3; i<Math.ceil(Math.sqrt(num)); i++){
		while(num%i === 0){
			num = num/i;
			factors.push(i);
		}
	}
	if(num>2){
		factors.push(num);
	}

	return factors;
}

const primeFactorsArr = function(arr){
	const out = [];

	for(n of arr){
		const res = primeFactors(n);
		out.push(res.length);
	}

	return out;
}


// console.log(primeFactors(315));

console.log(primeFactorsArr([1,3,4,5,10,12]))