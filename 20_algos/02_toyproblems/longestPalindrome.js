/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

const longestPalindrome = function (string) {
	const len = string.length;
	let result = '';

	for(let i=0; i<string.length; i++){
		const even = centeredPalindrome(i, i+1);
		const odd = centeredPalindrome(i-1, i+1);
		
		if(even.length > result.length){
			result = even;
		}
		if(odd.length > result.length){
			result = odd;
		}
	}
	return result;

	function centeredPalindrome(left, right){
		while(left>=0 && right<len && string[left] === string[right]){
			--left;
			++right;
		}
		return string.slice(left+1, right);
	}
}

console.log(longestPalindrome("My dad is a racecar athlete"));