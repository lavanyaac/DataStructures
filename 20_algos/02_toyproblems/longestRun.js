/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

 const longestRun = function (string) {
 		let start = 0;
 		let end = 0;
 		let len = 1;
 		let prev = string[1];
 		let runningLen= 1;
 		let runningStart = 0;

 		for(let i = 1; i<string.length; i++){
 			if(string[i] === string[i-1]){
 				runningLen++;
 			}else{
 				if(runningLen > len){
 					len = runningLen;
 					start = runningStart;
 					end = i-1;
 				}
				runningStart = i;
				runningLen = 1;
 			}
 		}
 		
 		if(runningLen > len){
 			start = runningStart;
 			end = string.length-1;
 		}
 		return [start, end];
 }

console.log(longestRun('abbbcc'));//[ 1, 3 ]
console.log(longestRun('aabbc'));//[ 0, 1 ]
console.log(longestRun('abcd'));//[ 0, 0 ]
console.log(longestRun(''));//[ 0, 0 ]