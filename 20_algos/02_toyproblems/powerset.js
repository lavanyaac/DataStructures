/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

 const powerset = (str) =>{
 	//sort
 	//remove duplicates
 	// recurse through subset
 	// check if we have already visited this combo
 	const inp = str.split('').sort();
 	const hash = {};
 	const set = [];
 	
 	for(let i = 1; i<inp.length; i++){
 		if(inp[i] === inp[i-1]){
 			inp.splice(i, 1);
 			--i;
 		}
 	}

 	recurse(inp);
 	set.push('');
 	return set;

 	function recurse(str){
 		const joined = str.join('');

 		if(hash[joined]){
 			return;
 		}
 		hash[joined] = true;
 		set.push(joined);

 		if(str.length === 1){
 			return;
 		}

 		for(let i = 0; i < str.length; i++){
 			const subset = str.slice(0, i).concat(str.slice(i+1));
 			recurse(subset);
 		}
 	}
 }

 console.log(powerset("abca"));