//Is Subsequence
// Given a string s and a string t, check if s is subsequence of t.

// You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// s = "abc", t = "ahbgdc"

// Return true.

// Example 2:
// s = "axc", t = "ahbgdc"

// Return false.

const isSubsequence = (t, s) => {

	if(s.length === 0){
		return true;
	}
	let p1 = 0;
	let p2 = 0;
	while(p1<t.length && p2<s.length){
		if(t[p1] === s[p2]){
			++p2;
		}
		if(p2 === s.length){
			return true;
		}
		++p1;
	}
	return false;
}

let s = "abc";
let t = "ahbgdc";
console.log(isSubsequence(t, s));//true

s = "axc";
t = "ahbgdc";
console.log(isSubsequence(t, s));//false
