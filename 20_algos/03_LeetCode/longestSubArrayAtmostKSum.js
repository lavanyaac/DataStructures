
// Longest Subarray having sum of elements atmost ‘k’
// 2.5
// Given an array of integers, our goal is to find the length of largest subarray having sum of its elements atmost ‘k’ where k>0.

// Examples:

// Input : arr[] = {1, 2, 1, 0, 1, 1, 0}, 
//            k = 4
// Output : 5
// Explanation:
//  {1, 2, 1} => sum = 4, length = 3
//  {1, 2, 1, 0}, {2, 1, 0, 1} => sum = 4, length = 4
//  {1, 0, 1, 1, 0} =>5 sum = 3, length = 5

// An efficient approach is to use sliding window technique.

// Traverse the array and check if on adding the current element its sum is less than or equal to k.
// If it’s less than k then add it to sum and increase the count.
// Else
// Remove the first element of subarray and decrease the count.
// Again check if on adding the current element its sum is less than or equal to k.
// If it’s less than k then add it to sum and increase the count.
// Keep track of Maximum count.
// .

function atMostSum(arr, k){
	let sum = 0;
	let count = 0;
	let maxCount = 0;

	for(const[i, v] of arr.entries()){
		if(sum + v <= k){
			sum += v;
			++count;
		}else if(sum !== 0){
			sum = sum - arr[i-count] + arr[i];
		}
		maxCount = Math.max(count, maxCount);
	}
	return maxCount;
}

const arr = [0, 2, 1, 10, 1, 1, 0, 1];
console.log(atMostSum(arr, 4));//4
