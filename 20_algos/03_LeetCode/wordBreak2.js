// 140. Word Break II

// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. You may assume the dictionary does not contain duplicate words.

// Return all such possible sentences.

// For example, given
// s = "catsanddog",
// dict = ["cat", "cats", "and", "sand", "dog"].

// A solution is ["cats and dog", "cat sand dog"].

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function(s, wordDict) {
	const map = {};
	return wordBreakHelper(s, wordDict);


	function wordBreakHelper(s, wordDict){
		const res = [];
	  if(s === null || s.length === 0){
	  	return res;
	  }
	  if(map[s]){
	  	return map[s];
	  }
	  if(wordDict.includes(s)){
	  	res.push(s);
	  } 
	  for(let i = 1; i<s.length; i++){
	  	const t = s.substring(i);
	  	if(wordDict.includes(t)){
	  		const temp = wordBreakHelper(s.substring(0, i), wordDict);
	  		if(temp.length){
	  			for(const v of temp){
	  				res.push(v + " " + t);
	  			}
	  		}
	  	}
	  }
	  map[s] = res;
	  return res;
	}
};
const dict = ["cat", "cats", "and", "sand", "dog"];
const s = "catsanddog";
const r = wordBreak(s, dict);

console.log(r);