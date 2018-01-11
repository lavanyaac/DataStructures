// Longest Palindromic Substring
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example:

// Input: "babad"

// Output: "bab"

// Note: "aba" is also a valid answer.
// Example:

// Input: "cbbd"

// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
   let lo = 0;
   let maxLen = 0;
   const len = s.length;
   if(len < 2){
   	return s;
   }

   for(let i = 0; i<len-1; i++){
   	 checkPalindrome(s, i, i);
   	 checkPalindrome(s, i, i+1);
   }

   return s.substr(lo, maxLen);


   function checkPalindrome(s, i, j){
   	while(i>=0 && j<s.length && s[i] === s[j]){
   		i--;
   		j++;
   	}
   	if(maxLen < (j-i-1)){
   		lo = i + 1;
   		maxLen = j - i - 1;
   	}
   }
};

const a = "babad";
console.log(longestPalindrome(a));//bab

const b = 'cbbd';
console.log(longestPalindrome(b));//bb

