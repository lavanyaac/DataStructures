// 44. Wildcard Matching
// Implement wildcard pattern matching with support for '?' and '*'.

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).

// The matching should cover the entire input string (not partial).

// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "*") → true
// isMatch("aa", "a*") → true
// isMatch("ab", "?*") → true
// isMatch("aab", "c*a*b") → false

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
   let sIdx = 0;
   let pIdx = 0;
   let matchIdx = 0;
   let starIdx = -1;

   while(sIdx < s.length){
   	if(pIdx < p.length && (p[pIdx] === '?' || p[pIdx] === s[sIdx])){
   		++sIdx;
   		++pIdx;
   	}else if(pIdx < p.length && p[pIdx] === '*'){
   		starIdx = pIdx;
   		matchIdx = sIdx; 
   		++pIdx;
   	}else if(starIdx !== -1){
   		pIdx = starIdx + 1;
   		matchIdx++;
   		sIdx = matchIdx;
   	}else{
   		return false;
   	}
   }

  while(pIdx < p.length && p[pIdx] === '*'){
  	++pIdx;
  }

  return pIdx === p.length; 
};

console.log(isMatch("aa","a")) //→ false
console.log(isMatch("aa","aa"))// true
console.log(isMatch("aaa","aa"))//false
console.log(isMatch("aa", "*"))//true
console.log(isMatch("aa", "a*"))//true
console.log(isMatch("ab", "?*"))//true
console.log(isMatch("aab", "c*a*b"))//false 
console.log(isMatch("aaaa", "***a"))//true 
console.log(isMatch("c", "*?*"))//true 

