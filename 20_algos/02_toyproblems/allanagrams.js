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
  permute(inp, 0);
  return permutations;

  function permute(inp, pos){
  	if(pos === inp.length){
  		permutations.push(inp.join(''));
  	}else{
	  	for(let i = pos; i<inp.length; i++){
	  		[inp[pos], inp[i]] =  [inp[i], inp[pos]];
	  		permute(inp, pos+1);
	  		[inp[pos], inp[i]] =  [inp[i], inp[pos]];//backtrack
	  	}
	  }
  }
};

console.log(allAnagrams('abc'));//[ 'abc', 'acb', 'bac', 'bca', 'cba', 'cab' ]