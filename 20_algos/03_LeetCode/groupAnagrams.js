// 49. Group Anagrams
// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note: All inputs will be in lower-case.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
	const res = {};

	for(const word of strs){
		const sortedWord = word.split('').sort().join('');
		res[sortedWord] = res[sortedWord] || [];
		res[sortedWord].push(word);
	}

	return Object.keys(res).map((item)=>{return res[item];});
}

const m = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(m));//[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

