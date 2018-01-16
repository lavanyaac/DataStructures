// 127. Word Ladder
// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// For example,

// Given:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log","cog"]
// As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Note:
// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

const ladderLength = function(beginWord, endWord, wordList){
	if(!wordList.includes(endWord)){
		return 0;
	}
	const dict = {};
	wordList.forEach((word) => dict[word] = 1);

	let beginSet = [];
	let endSet = [];

	let count = 1;
	const visited = {};

	beginSet.push(beginWord);
	endSet.push(endWord);

	while(beginSet.length && endSet.length){
		if(beginSet.length > endSet.length){
			const temp = beginSet;
			beginSet = endSet;
			endSet = temp;
		}

		const res = [];
		for(const word of beginSet){
			const charArray = word.split('');

			for(let i = 0; i < charArray.length; i++){
				const old = charArray[i];
				for(let k = 0; k < 26; k++){
					const c = String.fromCharCode(97+k);
					charArray[i] = c;
					const next = charArray.join('');

					if(endSet.includes(next)){
						return count + 1;
					}

					if(!visited[next] && dict[next]){
						res.push(next);
						visited[next] = 1;
					}
				}
				charArray[i] = old;
			}
		}
		beginSet = res;
		count++;
	}
	return 0;
}

 // Time limit exceed for the below solution
const ladderLengthold = function(beginWord, endWord, wordList) {
  let count = 0;
  const visited = [];
  const queue = [];

  visited.push(beginWord);
  queue.push(beginWord);

  while(queue.length){
  	const len = queue.length;
  	for(let i = 0; i < len; i++){
  		const word = queue.shift();
  		const wordArray = word.split('');
  		for(let j = 0; j<wordArray.length; j++ ){
  			const old = wordArray[j];
  			for(let k = 0; k<26; k++){
  				wordArray[j] = String.fromCharCode(97+k);
  				const next = wordArray.join('');
  				if(!visited.includes(next) && wordList.includes(next)){
  					if(endWord === next){
	  					return count+2;
	  				}
  					visited.push(next);
  					queue.push(next);
  				}
  			}
  			wordArray[j] = old;
  		}
  	}
  	++count;
  }
  return 0;
};

 // Time limit exceed for the below solution -better than previous
const ladderLengthAnother = function(beginWord, endWord, wordList){
	const dict = {};
	wordList.forEach((word) => dict[word] = 1);

	const queue = [];
	const visited = {};
	let count = 1;

	queue.push(beginWord);
	while(queue.length){
		for(let i = queue.length; i>0; i--){
			const word = queue.shift();
			if(word === endWord){ return count;}

			const charArray = word.split('');
			for(let j = 0; j < charArray.length; j++){
				const old = charArray[j];
				for(let k = 0; k < 26; k++){
					const c = String.fromCharCode(97+k);
					if(old === c){ continue;}
					charArray[j] = c;
					const next = charArray.join('');
					if(!visited[next] && dict[next]){
						visited[next] = 1;
						queue.push(next);
					}
				}
				charArray[j] = old;
			}
		}
		++count;
	}
	return 0;
}

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot","dot","dog","lot","log","cog"];
console.log(ladderLength(beginWord, endWord, wordList));//5

const beginWord1 = "game";
const endWord1 = "thee";
const wordList1 = ["frye","heat","tree","thee","game","free","hell","fame","faye"];
console.log(ladderLength(beginWord1, endWord1, wordList1));//7

// for(let k = 0; k < 26; k++){
// 	const c = String.fromCharCode(97+k);
// 	console.log(c);
// }





