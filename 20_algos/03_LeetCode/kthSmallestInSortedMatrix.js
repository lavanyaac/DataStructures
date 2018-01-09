// Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// Example:

// matrix = [
//    [ 1,  5,  9],
//    [10, 11, 13],
//    [12, 13, 15]
// ],
// k = 8,

// return 13.
// Note: 
// You may assume k is always valid, 1 ≤ k ≤ n2.

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(matrix, k) {
 const m = matrix.length;
 const n = matrix[0].length;

 let lower = matrix[0][0];
 let upper = matrix[m-1][n-1];

 while(lower<upper){
 	const mid = lower + Math.floor((upper-lower)/2);
 	const count = counter(matrix, mid);
 	if(count<k){
 		lower = mid+1;
 	}else{
 		upper = mid;
 	}
 }
 return upper;
};

function counter(matrix, target){
	const m = matrix.length;
	const n = matrix[0].length;

	let i = m-1;
	let j = 0;
	let count = 0;

	while(i >= 0 && j < n){
		if(matrix[i][j] <= target){
			++j;
			count += i+1;
		}else{
			--i;
		}
	}
	return count;
}


const matrix = [
[ 1, 5, 9],
[10, 11, 13],
[12, 13, 15]
]
const k = 8;

console.log(kthSmallest(matrix, k));//13