/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

 const binarySearch = function (array, target) {

 	let start = 0;
 	let end = array.length;

 	while(start<end){
 		let mid = Math.floor((start+end)/2);

 		if(target === array[mid]){
 			return mid;
 		}

 		if(target < array[mid]){
 			end = mid;
 		}else{
 			start = mid + 1;
 		}
 	}
 }

var index = binarySearch([1, 2, 3, 4, 5,6], 3);
console.log(index);//2

