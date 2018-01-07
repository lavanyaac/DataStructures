// Find the element that appears once in an array where every other element appears twice
// Given an array of integers. All numbers occur twice except one number which occurs once. 
// Find the number in O(n) time & constant extra space.

function singleElement(arr){
	let res = 0;
	for(i of arr){
		res = res^i;
	}
	return res;
}

console.log(singleElement([1,2,3,1,2,3,4,5,6,5,6]))//4