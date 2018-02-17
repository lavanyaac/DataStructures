// 647. Palindromic Substrings

// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
// Note:
// The input string length won't exceed 1000.

const palindromicSubstrings = function(s){
	let count = 0;
	countSubstrings(s);
	return count;

	function countSubstrings(s){
		if(s === null || s.length === 0){
			return 0;
		}
		for(let i = 0; i < s.length; i++){
			extendPalindrome(s, i, i);//even length
			extendPalindrome(s, i, i+1);//odd length
		}
	}

	function extendPalindrome(s, i, j){
		while(i>=0 && j<s.length && s[i] === s[j]){
			--i;
			++j;
			++count;
		}
	}
}

console.log(palindromicSubstrings('abc'));
console.log(palindromicSubstrings('aaa'));
