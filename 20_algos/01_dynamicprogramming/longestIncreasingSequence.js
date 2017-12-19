//Longest Increasing Sequence

//inp = [5, 2, 7, 3, 10, 4, 6]
//out = 4 ([2,3,4,6])

// 300. Longest Increasing Subsequence
// Given an unsorted array of integers, find the length of longest increasing subsequence.

// For example,
// Given [10, 9, 2, 5, 3, 7, 101, 18],
// The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

// Your algorithm should run in O(n2) complexity.

// Follow up: Could you improve it to O(n log n) time complexity?

function LongestIncreasingSubSeq(arr){
	const result = new Array(arr.length).fill(1);
	for(i = 1; i<arr.length; i++){
		for(j = 0; j<i; j++){
			if(arr[j] < arr[i]){
				result[i] = Math.max((result[j] + 1), result[i]);
			}
		}
	}
	return Math.max.apply(null, result);
}

const arr = [10, 9, 2, 5, 3, 7, 101, 18, 102];
console.log(LongestIncreasingSubSeq(arr));//5