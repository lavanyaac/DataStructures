//Minimum Cost Path
// Given a cost matrix cost[][] and a position (m, n) in cost[][], 
// write a function that returns cost of minimum cost path to reach (m, n) from (0, 0). 
// Each cell of the matrix represents a cost to traverse through that cell. 
// Total cost of a path to reach (m, n) is sum of all the costs on that path (including both source and destination). 
// You can only traverse down, right and diagonally lower cells from a given cell.
// You may assume that all costs are positive integers.
const cost = [[1, 2, 3], [4, 8, 2], [1,5,3]];
//*******************************************************************************
//Solved by recursion
//*******************************************************************************
function minimumCostPathRecursion(cost, m, n){
	if(m < 0 || n< 0){
		return Number.MAX_SAFE_INTEGER;
	}
	if(m === 0 && n === 0){
		return cost[m][n];
	}
	return Math.min(minimumCostPathRecursion(cost, m, n-1), minimumCostPathRecursion(cost, m-1, n-1), minimumCostPathRecursion(cost, m-1, n))+ cost[m][n];
}
// console.log(minimumCostPathRecursion(cost, cost.length-1, cost[0].length-1));//8
//*******************************************************************************
//Solved by recursion with Memo
//*******************************************************************************
function minimumCostPathRecursionWithMemo(cost, m, n, memo=[]){
	if(m < 0 || n< 0){
		return Number.MAX_SAFE_INTEGER;
	}
	if(m === 0 && n === 0){
		return cost[m][n];
	}

	memo[m] = memo[m] || [];

	if(memo[m][n] === undefined){
		memo[m][n] = Math.min(minimumCostPathRecursion(cost, m, n-1), minimumCostPathRecursion(cost, m-1, n-1), minimumCostPathRecursion(cost, m-1, n))+ cost[m][n];
	}
	return memo[m][n];
}
// console.log(minimumCostPathRecursionWithMemo(cost, cost.length-1, cost[0].length-1));//8
//*******************************************************************************
//Solved by iteration with Memo
//*******************************************************************************
function minimumCostPathIterationWithMemo(cost, m, n){
	if(m > cost.length && n > cost[0].length){
		return;
	}
	const memo = [];
	memo[0] = [];
	memo[0][0] = cost[0][0];

	for(let i = 1; i<cost.length; i++){
		memo[i] = [];
		memo[i][0] = memo[i-1][0] + cost[i][0];
	}

	for(let j = 1; j<cost[0].length; j++){
		memo[0][j] = memo[0][j-1] + cost[0][j];
	}

	for(let i = 1; i<=m; i++){
		for(let j = 1; j<=n; j++){
			memo[i][j] = Math.min(memo[i][j-1], memo[i-1][j-1], memo[i-1][j]) + cost[i][j];
		}
	}
	return memo[m][n];
}

console.log(minimumCostPathIterationWithMemo(cost, cost.length-1, cost[0].length-1));//8