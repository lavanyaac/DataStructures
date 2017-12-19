// LCS Problem Statement: Given two sequences, find the length of longest subsequence present in both of them. 
//A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. 
//For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”. 
//So a string of length n has 2^n different possible subsequences.

// Examples:
// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.
const a = "AGGTAB";
const b = "GXTXAYB";


//*******************************************************************************
//Solved by recursion
//*******************************************************************************
function LCSRecursion(str1, str2){
	return helper(str1, str1.length-1, str2, str2.length-1);

	function helper(str1, index1, str2, index2){
		if(index1 < 0 || index2 < 0){
			return 0;
		}
		if(str1[index1] === str2[index2]){
			return 1 + helper(str1, index1-1, str2, index2-1);
		}
		return Math.max(helper(str1, index1-1, str2, index2), helper(str1, index1, str2, index2-1));
	}
}
console.log(LCSRecursion(a, b));
//*******************************************************************************
//Solved by iteration with Memo
//*******************************************************************************
function LCSIterationWithMemo(str1, str2){
	const results = [];
	for(let i = 0; i <= str1.length; i++){
		results[i] = results[i] || [];
		for(let j=0; j <= str2.length; j++){
			if(i === 0 || j === 0){
				results[i][j] = 0;
			}else if(str1[i-1] === str2[j-1]){
				results[i][j] = 1 + results[i-1][j-1];
			}else{
				results[i][j] = Math.max(results[i-1][j], results[i][j-1]);
			}

		}
	}
	return results[str1.length][str2.length];
}
console.log(LCSIterationWithMemo(a, b));