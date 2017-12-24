//153. Find Minimum in Rotated Sorted Array
// findPivot

// I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet.
// In other words, this is an alphabetically ordered array that has been "rotated." Write a function that returns the index of the pivot, or null if there is no pivot (meaning the entire list of words is in alphabetical order). 

// For example:
// ['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']
// // returns 3

// Remember the rules of how to answer technical prompts. Try and go from a working naive solution to a working ideal solution.

const findPivot = (arr) => {
	let start = 0 ;
	let end = arr.length - 1;
	while(start < end){
		if(arr[start] < arr[end]){
			return start;
		}
		const mid = Math.floor((start+end)/2);
		if(arr[mid] >= arr[start]){
			start = mid+1;
		}else{
			end = mid;
		}
	}
	return start;
}

const arr = ['good','apple', 'bear', 'cat','dog', 'eagle', 'falcon'];//1;

console.log(findPivot(arr));