/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

const rotatedArraySearch = (arr, target) => {
	let start = 0;
	let end = arr.length-1;

	while(start<=end){
		let mid = Math.max((start+end)/2);
		if(arr[mid] === target){
			return mid;
		}

		if(arr[start] <= arr[mid]){
			if(arr[start] <= target && target < arr[mid]){
				end = mid - 1;
			}else{
				start = mid + 1;
			}
		}else{
			if(arr[mid] < target && target <= arr[end]){
				start = mid + 1;
			}else{
				end = mid - 1;
			}
		}
	}
	return null;
}

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2))//5
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100))//null