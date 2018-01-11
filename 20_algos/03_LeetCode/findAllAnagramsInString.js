// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
	const res = [];
	const map = {};
	for(const c of p){
		map[c] = map[c] || 0;
		map[c] += 1;
	}

	let counter = Object.keys(map).length;

	let idx1 = 0;
	let idx2 = 0;

	while(idx1 < s.length){
		const c = s[idx1];
		if(map[c] !== undefined){
			map[c] -= 1;
			if(map[c] === 0){
				--counter;
			}
		}
		++idx1;

		while(counter === 0){
			const tempC = s[idx2];
			if(map[tempC] !== undefined){
				map[tempC] += 1;
				if(map[tempC] > 0){
					++counter;
				}
			}
			if(idx1-idx2 === p.length){
				res.push(idx2);
			}
			++idx2;
		}
	}
	return res;
}


const s =  "cbaebabacd" ;
const p = "abc";
console.log(findAnagrams(s, p));//[ 0, 6 ]


const a =  "abab" ;
const b = "ab";
console.log(findAnagrams(a, b));//[ 0, 1, 2 ]