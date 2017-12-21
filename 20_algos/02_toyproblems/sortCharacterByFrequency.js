// Leetcode: 451. Sort Characters By Frequency
// Given a string, sort it in decreasing order based on the frequency of characters.
// Example 1:
// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

const sortCharsByFrequency = (str) => {
	const hashed = {};

	for(const char of str){
		hashed[char] = hashed[char] || 0;
		++hashed[char];
	}

	const arr = Object.keys(hashed).sort((a, b)=>{return hashed[b]- hashed[a]});

	const output = [];
	for(const char of arr){
		let cnt = hashed[char];
		while(cnt>0){
			output.push(char);
			--cnt;
		}
	}
	return output.join('');
}

console.log(sortCharsByFrequency('tree'));//eetr
console.log(sortCharsByFrequency('cccaaa'))//cccaaa
















