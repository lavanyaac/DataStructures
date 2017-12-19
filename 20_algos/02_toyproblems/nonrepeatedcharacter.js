/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  const memo = {};
  for(const char of string){
  	memo[char] = memo[char] || 0;
  	memo[char] += 1;
  }
  for(const char of string){
  	if(memo[char] === 1){
  		return char;
  	}
  }
};

console.log(firstNonRepeatedCharacter('ABA'));//B
console.log(firstNonRepeatedCharacter('AACBDB'));//C