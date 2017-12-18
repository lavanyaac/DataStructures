//Objective: A child is climbing up a staircase with n steps, 
// and can hop either 1 step, 2 steps, or 3 steps at a time. 
// Implement a method to count how many possible ways the child can 
// jump up the stairs.

//*******************************************************************************
//Solution using recursion
//*******************************************************************************
function nstepsRecursion(n){
	if(n<=0){
		return 0;
	}

	if(n > 0 && n < 4){
		return Math.pow(2, n-1);
	}

	return nstepsRecursion(n-1) + nstepsRecursion(n-2) + nstepsRecursion(n-3);
}
// console.log(nstepsRecursion(8));//81
//Time Complexity - O(3^n);

//*******************************************************************************
//Solution using recursion with memoization
//*******************************************************************************
function nstepsRecurMemo(n, results=[]){
	if(n <= 0){
		return 0;
	}

	if(n > 0 && n < 4){
		results[n] = Math.pow(2, n-1);
		return results[n];
	}

	if(!result[n]){
		result[n] = nstepsRecursion(n-1) + nstepsRecursion(n-2) + nstepsRecursion(n-3);
	}
	return result[n];
}
// console.log(nstepsRecursion(8));//81
//Time Complexity - O(n);

//*******************************************************************************
//Solution using iteration with memoization
//*******************************************************************************
function nstepsIterMemo(n){
	if(n <= 0){
		return;
	}
	const results = [0,1,2,4];

	for(let i = 4; i <= n; i++){
		results[i] = results[i-1] + results[i-2] + results[i-3];
	}

	return results[n];

}

console.log(nstepsIterMemo(8))//81