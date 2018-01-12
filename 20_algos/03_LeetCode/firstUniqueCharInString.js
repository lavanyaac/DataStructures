// 387. First Unique Character in a String
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {

	const freq = new Array(26).fill(0);

	for(let i = 0; i < s.length; i++){
		const c = s.charCodeAt(i) - 'a'.charCodeAt(0);
		freq[c] += 1;
	}
	for(let i = 0; i< s.length; i++){
		const c = s.charCodeAt(i) - 'a'.charCodeAt(0);
		if(freq[c] === 1){
			return i
		}
	}
	return -1;
}

console.log(firstUniqChar("aaabbgtfs"));//5