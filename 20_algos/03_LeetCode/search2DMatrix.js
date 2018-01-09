// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// For example,

// Consider the following matrix:

// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// Given target = 3, return true.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
	const m = matrix.length;
	const n = matrix[0].length;

	let start = 0;
	let end = (m*n)-1;

	while(start <= end){
		const mid = Math.floor((start+end)/2);
		const row = Math.floor(mid/n);
		const col = Math.floor(mid%n);
		if(matrix[row][col] === target){
			return true;
		}
		if(matrix[row][col] > target){
			end = mid-1;
		}else{
			start = mid+1;
		}
	}
	return false;
}

const M =[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

console.log(searchMatrix(M, 3));//true
console.log(searchMatrix(M, 13));//false
console.log(searchMatrix(M, 30));//true