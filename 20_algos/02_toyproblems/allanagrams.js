/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

const allAnagrams = function(string) {
  const inp = string.split('');
  const endIndex = inp.length-1;
  const startIndex = 0;
  const permutations = [];
  permute(inp, startIndex, endIndex);
  return permutations;

  function permute(inp, index, endIndex){
  	if(index === endIndex+1){
  		permutations.push(inp.join(''));
  	}else{
	  	for(let i = index; i<=endIndex; i++){
	  		[inp[i], inp[endIndex]] =  [inp[endIndex], inp[i]];
	  		permute(inp, index+1, endIndex);
	  		[inp[i], inp[endIndex]] =  [inp[endIndex], inp[i]];//backtrack
	  	}
	  }
  }
};

console.log(allAnagrams('abc'));//[ 'cab', 'cba', 'abc', 'acb', 'acb', 'abc' ]