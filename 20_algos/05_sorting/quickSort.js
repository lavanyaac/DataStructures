// Quick Sort

// Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: 
// the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. 

// Complexity
// Time complexity	 	 
// Best							Average			Worst
// O(n log(n))		O(n log(n))		O(n^2)

function quickSortbasic(arr){
	if(arr.length < 2){
		return arr;
	}

	const pivot = arr[0];
	const lesser = [];
	const greater = [];

	for(let i = 1; i < arr.length; i++){
		if(arr[i] < pivot){
			lesser.push(arr[i]);
		}else{
			greater.push(arr[i]);
		}
	}

	return quickSortbasic(lesser).concat(pivot, quickSortbasic(greater));
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(quickSortbasic(array.slice()));

/////////////////////////////////////////////////////////////////////////////////

function quickSort(arr){
	return quickSortHelper(arr, 0, arr.length-1);

	function quickSortHelper(arr, left = 0, right = arr.length-1){
		const pivot = hoarePartition(arr, left, right);
		if(left < pivot-1){
			quickSortHelper(arr, left, pivot-1);
		}

		if(right > pivot){
			quickSortHelper(arr, pivot, right);
		}
		return arr;
	}
}

function hoarePartition(arr, left, right){
	const pivot = Math.floor((left + right)/2);
	while(left <= right){
		while(arr[left] < arr[pivot]){
			left++;
		}

		while(arr[right] > arr[pivot]){
			right--;
		}

		if(left <= right){
			swap(arr, left, right);
			left++;
			right--;
		}
	}
	return left;
}

function swap(arr, i, j){
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(quickSort(array.slice()));//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]