// Bubble Sort
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted
// Complexity
// Time complexity	 	 
// Best	Average	 Worst
// O(n)	O(n^2)	 O(n^2)

function bubbleSortBasic(arr){
	for(let i = 0; i < arr.length; i++){
		for(let j = 1; j < arr.length; j++){
			if(arr[j-1] > arr[j]){
				swap(arr, j-1, j);
			}
		}
	}
	return arr;
}

function swap(arr, i, j){
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(bubbleSortBasic(array.slice()));// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function bubbleSort(arr){
	let swapped;
	for(let i = 0; i < arr.length; i++){
		swapped = false;
		for(let j = 1; j < arr.length; j++){
			if(arr[j-1] > arr[j]){
				swap(arr, j-1, j);
				swapped = true;
			}
		}
		if(!swapped){
			break;
		}
	}
	return arr;
}
console.log(bubbleSort(array.slice()));// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]