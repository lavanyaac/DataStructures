// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// For example,
// Given "egg", "add", return true.

// Given "foo", "bar", return false.

// 205. Isomorphic StringsGiven "paper", "title", return true.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
	if(!s && !t){
		return true;
	}
	if((!s && t) || (s && !t)){
		return false;
	}
	if(s.length !== t.length){
		return false;
	}
	const res1 = {};
	const res2 = {};

	for(let i = 0; i < s.length; i++){
		const code1 = s.charCodeAt(i);
		const code2 = t.charCodeAt(i);
		if(res1[code1] !== res2[code2]){
			return false;
		}
		res1[code1] = i+1;
		res2[code2] = i+1; 
	}
	return true;
}

console.log(isIsomorphic('egg', 'add'));//true
console.log(isIsomorphic('foo', 'bar'));//false