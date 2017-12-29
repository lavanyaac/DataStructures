/////////////////////////////////////////////////////////////////////////////////////////////////////////
//11. Word Distance
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestDistance = function(words, word1, word2) {
	let shortestDist = Number.MAX_SAFE_INTEGER;
	let word1Idx = -1;
	let word2Idx = -1;

	for([i, word] of words.entries()){
		if(word === word1){
			word1Idx = i;
		}
		if(word === word2){
			word2Idx = i;
		}
		if(word1Idx !== -1 && word2Idx !== -1){
			shortestDist = Math.min(shortestDist, Math.abs(word1Idx-word2Idx));
		}
	}
	return shortestDist;
}

const words = ["practice", "makes", "perfect", "coding", "makes"]
const word1 = "makes";
const word2 = "coding";
console.log(shortestDistance(words, word1, word2));//1