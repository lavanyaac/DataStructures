//Robot Paths
// Count all possible paths from top left to bottom right of a mXn matrix
// The problem is to count all the possible paths from top left to bottom right of a mXn matrix 
// with the constraints that from each cell you can either move only to right or down


//*******************************************************************************
//Solved by recursion
//*******************************************************************************
function robotPathRecursion(m, n){
	if(m === 1 || n === 1){
		return 1;
	}

	return robotPathRecursion(m-1, n) + robotPathRecursion(m,n-1);
}
// console.log(robotPathRecursion(3, 3));//6
// console.log(robotPathRecursion(5, 6));//126
//*******************************************************************************
//Solved by iteration with Memo
//*******************************************************************************
function robotPathIterationWithMemo(m, n){
	const path = [];

	for(let i = 0; i<m; i++){
		path[i] = path[i] || [];
		for(let j = 0; j<n; j++){
			if(i === 0 || j=== 0){
				path[i][j] = 1
			}else{
				path[i][j] = path[i-1][j] + path[i][j-1];
			}
		}
	}

	return path[m-1][n-1];
}
console.log(robotPathIterationWithMemo(3, 3));//6
console.log(robotPathIterationWithMemo(5, 6));//126