//Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. 
// The number of elements initialized in nums1 and nums2 are m and n respectively.

function mergeSortedArrays(arr1, m, arr2, n){
	let i = m-1;
	let j = n-1;
	let k = m+n-1;

	while(i>=0 && j>=0){
		if(arr1[i] > arr2[j]){
			arr1[k] = arr1[i];
			--i;
		}else{
			arr1[k] = arr2[j];
			--j;
		}
		--k;
	}

	while(j >= 0){
		arr1[k] = arr2[j];
		--k;
		--j;
	}
};

let a = [32, 56, 67, 78, 90];
let b = [1,2,31,65,99,100];
mergeSortedArrays(a, a.length, b, b.length);
console.log(a);