/////////////////////////////////////////////////////////////////////////////////////////////////////////
//16. Nested List Weight Sum
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

// Each element is either an integer, or a list -- whose elements may also be integers or other lists.

// Example 1:
// Given the list [[1,1],2,[1,1]], return 10. (four 1's at depth 2, one 2 at depth 1)

// Example 2:
// Given the list [1,[4,[6]]], return 27. (one 1 at depth 1, one 4 at depth 2, and one 6 at depth 3; 1 + 4*2 + 6*3 = 27)
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */

const depthSum = function(nestedList) {
	let depth = 0;
	let sum = 0;
	let queue = [];
	queue.push(nestedList);

	while(queue.length){
		depth += 1;
		let count = queue.length;
		while(count > 0){
			const list = queue.shift();
			for(const item of list){
				if(Array.isArray(item)){
					queue.push(item);
				}else{
					sum += depth * item;
				}
			}
			--count;
		}
	}

	return sum;
};

console.log(depthSum([1,[4,[6]]]));//27
console.log(depthSum([[1,1],2,[1,1]]));//10