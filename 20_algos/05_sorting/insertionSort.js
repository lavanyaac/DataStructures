// Insertion Sort
// Insertion sort algorithm iterates, consuming one input element each repetition, and growing a sorted output list. 
// Each iteration removes one element from the input data, finds the location it belongs within the sorted list, 
// and inserts it there. It repeats until no input elements remain.
// Complexity
// Time complexity	 	 
// Best		Average		Worst
// O(n)		O(n^2)		O(n^2)

function insertionSort(arr){
	for(let i = 0; i < arr.length; i++){
		for(let j = i; j > 0; j--){
			if(arr[j] < arr[j-1]){
				swap(arr, j, j-1);
			}
		}
	}
	return arr;
}

function swap(arr, i, j){
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(insertionSort(array));//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]