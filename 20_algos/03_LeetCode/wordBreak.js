// 139. Word Break

// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
// determine if s can be segmented into a space-separated sequence of one or more dictionary words. 
// You may assume the dictionary does not contain duplicate words.

// For example, given
// s = "leetcode",
// dict = ["leet", "code"].

// Return true because "leetcode" can be segmented as "leet code".


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
	const t = new Array(s.length+1);
	t[0] = true;

	for(let i = 1; i <= s.length; i++){
		for(let j = 0; j < i; j++){
			if(t[j] && wordDict.includes(s.substring(j, i))){
				t[i] = true;
				break;
			}
		}
	}
	return t[s.length] || false;
}

console.log(wordBreak("leetcode", ["leet", "code"]));