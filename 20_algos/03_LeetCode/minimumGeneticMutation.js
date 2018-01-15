// 433. Minimum Genetic Mutation
// A gene string can be represented by an 8-character long string, with choices from "A", "C", "G", "T".

// Suppose we need to investigate about a mutation (mutation from "start" to "end"), where ONE mutation is defined as ONE single character changed in the gene string.

// For example, "AACCGGTT" -> "AACCGGTA" is 1 mutation.

// Also, there is a given gene "bank", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.

// Now, given 3 things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from "start" to "end". If there is no such a mutation, return -1.

// Note:

// Starting point is assumed to be valid, so it might not be included in the bank.
// If multiple mutations are needed, all mutations during in the sequence must be valid.
// You may assume start and end string is not the same.
// Example 1:

// start: "AACCGGTT"
// end:   "AACCGGTA"
// bank: ["AACCGGTA"]

// return: 1
// Example 2:

// start: "AACCGGTT"
// end:   "AAACGGTA"
// bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]

// return: 2
// Example 3:

// start: "AAAAACCC"
// end:   "AACCCCCC"
// bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]

// return: 3

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = function(start, end, bank) {
  if(start === end){ return 0; }

  const charSet = ['A', 'C', 'G', 'T'];
  let level = 0;
  const visited = [];
  const queue = [];

  visited.push(start);
  queue.push(start);

  while(queue.length){
  	let counter = queue.length;
  	while(counter-- > 0){
  		const curr = queue.shift();
  		const currArray = curr.split('');

  		for(let i = 0; i < currArray.length; i++){
  			const old = currArray[i];

  			for(const c of charSet){
  				currArray[i] = c;
  				const next = currArray.join('');

  				if(!visited.includes(next) && bank.includes(next)){
  					if( next === end){
  						return level+1;
  					}
  					visited.push(next);
  					queue.push(next);
  				}
  			}

  			currArray[i] = old;
  		}
  	}
  	++level;
  }
  return -1; 
};

const start = "AACCGGTT";
const end =   "AACCGGTA";
const bank = ["AACCGGTA"];

console.log(minMutation(start, end, bank));//1

start1 = "AAAAACCC"
end1 =   "AACCCCCC"
bank1 =  ["AAAACCCC", "AAACCCCC", "AACCCCCC"]
console.log(minMutation(start1, end1, bank1));//3

start1 = "AACCGGTT"
end1 =   "AAACGGTA"
bank1 =  ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
console.log(minMutation(start1, end1, bank1));//2