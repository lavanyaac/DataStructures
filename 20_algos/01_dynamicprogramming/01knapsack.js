// A Thief has a knapsack that can hold X lbs of stolen goods
// Each stolen good is worth a certain amount of cash, but
// the stolen good also weighs a certain weight. This means that
// the thief has to pick an optimal combination of items!
// The Thief can't pick the same item twice.

// What is the maximum worth of goods that the thief can steal?

//Given:
weights = [1, 3, 4, 5];
value = [1, 4, 5, 7];
capacity = 7;
noOfItems = weights.length;

//*******************************************************************************
//Solved by recursion
//*******************************************************************************

function knapsack_recursion(valueArr, weightArr, capacity, noOfItems, index){
	if(index >= noOfItems){
		return 0;
	}

	if(weightArr[index] > capacity){
		return knapsack_recursion(valueArr, weightArr, capacity, noOfItems, index+1);
	}

	const totalValueIfItemNotPicked = knapsack_recursion(valueArr, weightArr, capacity, noOfItems, index+1);
	const totalValueIfItemPicked = knapsack_recursion(valueArr, weightArr, capacity-weightArr[index], noOfItems, index+1) + valueArr[index];
	return Math.max(totalValueIfItemNotPicked, totalValueIfItemPicked);

}

// console.log(knapsack_recursion(value, weights, capacity, noOfItems, 0));

//*******************************************************************************
// Solved by recursion with memoization
//*******************************************************************************
function knapsack_recursion_withMemo(valueArr, weightArr, capacity, noOfItems, index, results=[]){
	if(index >= noOfItems){
		return 0;
	}
	results[index] = results[index] || [];

	if(weightArr[index] > capacity){
		if(results[index][capacity] === undefined){
			results[index][capacity] = knapsack_recursion_withMemo(valueArr, weightArr, capacity, noOfItems, index+1, results);
		}
		return results[index][capacity];
	}
	if(results[index][capacity] === undefined){
		const totalValueIfItemNotPicked = knapsack_recursion_withMemo(valueArr, weightArr, capacity, noOfItems, index+1, results);
		const totalValueIfItemPicked = knapsack_recursion_withMemo(valueArr, weightArr, capacity-weightArr[index], noOfItems, index+1, results) + valueArr[index];
		results[index][capacity] =  Math.max(totalValueIfItemNotPicked, totalValueIfItemPicked);
	}

	return results[index][capacity];
}

// weights = [10, 20, 30];
// value = [60, 100, 120];
// capacity = 50;
// noOfItems = 3;
// console.log(knapsack_recursion_withMemo(value, weights, capacity, noOfItems, 0));//220

//*******************************************************************************
function knapsack_iter_withMemo(valueArr, weightArr, capacity, noOfItems){
	const results = [];
	for(let i = 0; i <= noOfItems; i++){
		results[i] = results[i] || [];
		for(let j = 0; j<=capacity; j++){
			if(i === 0 || j === 0){
				results[i][j] = 0;
			}else if(weightArr[i-1] > j){
				results[i][j] = getResults(results, i-1, j);
			}else{
				const totalValueIfItemNotPicked = getResults(results, i-1, j);
				const totalValueIfItemPicked = getResults(results, i-1, j-weightArr[i-1]) + valueArr[i-1];
				results[i][j] = Math.max(totalValueIfItemPicked, totalValueIfItemNotPicked);
			}
		}
	}
	return results[noOfItems][capacity];
}

function getResults(arr, i, j){
	if(arr && arr[i] !== undefined && arr[i][j] !== undefined){
		return arr[i][j]; 
	}else{
		return 0;
	}
}
console.log(knapsack_iter_withMemo(value, weights, capacity, noOfItems));