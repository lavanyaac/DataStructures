/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  const memo = {};
  for(const val of arr){
  	memo[val] = memo[val] || 0;
  	memo[val] += 1;
  }

  for(const val of arr){
  	if(memo[val] % 2 === 0){
  		return val;
  	}
  }
  return null;
};

const A = [1, 7, 2, 4, 4, 4, 5, 6, 8, 9, 6, 4];
console.log(evenOccurrence(A));//4