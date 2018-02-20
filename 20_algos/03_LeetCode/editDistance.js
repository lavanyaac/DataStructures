// Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

// You have the following 3 operations permitted on a word:

// a) Insert a character
// b) Delete a character
// c) Replace a character

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function(word1, word2) {
	const res = [];

	for(let i = 0; i <= word1.length; i++){
		res[i] = [];
		for(let j = 0; j <= word2.length; j++){
			if(i === 0){
				res[i][j] = j;
			}else if(j === 0){
				res[i][j] = i;
			}else if(word1[i-1] === word2[j-1]){
				res[i][j] = res[i-1][j-1];
			}else{
				res[i][j] = 1 + Math.min(res[i-1][j], res[i-1][j-1], res[i][j-1]);
			}
		}
	}
	return res[word1.length][word2.length];
};

console.log(minDistance("", ""));//0
console.log(minDistance("abcdef", "azced"));//3

