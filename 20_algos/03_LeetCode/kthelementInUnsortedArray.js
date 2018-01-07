// K’th Smallest/Largest Element in Unsorted Array 
// Given an array and a number k where k is smaller than size of array, 
// we need to find the k’th smallest element in the given array. It is given that ll array elements are distinct.

// Examples:

// Input: arr[] = {7, 10, 4, 3, 20, 15}
//        k = 3
// Output: 7

// Input: arr[] = {7, 10, 4, 3, 20, 15}
//        k = 4
// Output: 10

//method1: O(nlogn): sort and return the element in k-1 index of sorted array.
//method2: O(n + klogn): for kth smallest: create min heap of given n elements and call extractMin() k times;
//method3: O(k + (n-k)*logk): for kth smallest: create max heap of first elements and then for (n-k) elements
														// compare with maxelement. if smaller, add to heap else ignore it.
//method4: O(n2) -  worst, O(n) - average: Quick Select.
//method5: O(n2) -  worst, O(n) - average: Quick Select - randomized pivot selection.

//method 5 - code

function kthSmallest(arr, start, end, k){
	if(k > 0 && k <= (end-start)+1){
		const pos = randomPartition(arr, start, end);

		if(pos-start === k-1){
			return arr[pos];
		}
		if(pos-start > k-1){
			return kthSmallest(arr, start, pos-1, k);
		}
		return kthSmallest(arr, pos+1, end, k-pos+start-1);
	}
	return null;
}

function randomPartition(arr, start, end){
	const n = end-start+1;
	const pivot = Math.floor((Math.random() * n) + start);
	swap(arr, pivot, end);
	return partition(arr, start, end);
}

function partition(arr, start, end){
	const pivot = arr[end];
	let j = start;
	for(let i = start; i<end; i++){
		if(arr[i] <= pivot){
			swap(arr, j, i);
			j++
		}
	}
	swap(arr, j, end);
	return j;
}

function swap(arr, pos1, pos2){
	[arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
}

function findKthSmallest(arr, k){
	// return kthSmallest(arr, 0, arr.length-1, arr.length-k+1); ///uncomment for kth largest 
	//arr = [7, 10, 4, 3, 20, 15];
	// k  = 2 for kth largest is 15
	return kthSmallest(arr, 0, arr.length-1, k);
}

const arr = [7, 10, 4, 3, 20, 15];
const k = 4;
console.log(findKthSmallest(arr, k));//10
