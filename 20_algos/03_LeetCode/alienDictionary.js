// 269. Alien Dictionary
// There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

// Example 1:
// Given the following words in dictionary,

// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]
// The correct order is: "wertf".

// Example 2:
// Given the following words in dictionary,

// [
//   "z",
//   "x"
// ]
// The correct order is: "zx".

// Example 3:
// Given the following words in dictionary,

// [
//   "z",
//   "x",
//   "z"
// ]
// The order is invalid, so return "".

// Note:
// You may assume all letters are in lowercase.
// You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
// If the order is invalid, return an empty string.
// There may be multiple valid order of letters, return any one of them is fine.


/**
 * @param {string[]} words
 * @return {string}
 */
const alienOrder = function(words) {
  const map = {};
  const degree = {};

  let result = "";

  if(words === null || words.length === 0){ return result; }
  for(const word of words){
  	for(const c of word){
  		degree[c] = 0;
  	}
  }

  for(let i = 0; i < words.length-1; i++){
  	const curr = words[i];
  	const next = words[i+1];
  	const len = Math.min(curr.length, next.length);
  	for(let j = 0; j<len; j++){
  		const c1 = curr[j];
  		const c2 = next[j];
  		if(c1 !== c2){
  			let set = [];
  			if(map[c1]){set = map[c1];}
  			if(!set.includes(c2)){
  				set.push(c2);
  				map[c1] = set;
  				degree[c2] = degree[c2] + 1;
  			}
  			break;
  		}
  	}
  }

  const q = [];
  for(const c in degree){
  	if(degree[c] === 0){
  		q.push(c);
  	}
  }
  while(q.length){
  	const c = q.shift();
  	result += c;
  	if(map[c]){
  		for(const c2 of map[c]){
  			degree[c2] = degree[c2] - 1;
  			if(degree[c2] === 0){ q.push(c2)}
  		}
  	}
  }
  return (result.length !== Object.keys(degree).length) ? '' : result;
};


const A = [
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
];

console.log(alienOrder(A));//"wertf"

const B = [
  "z",
  "x",
  "z"
];
console.log(alienOrder(B));//""

const C = [
  "z",
  "x"
];
console.log(alienOrder(C));//"zx"
