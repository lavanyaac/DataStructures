// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

const generateParanthesis = (n) => {
	const results =[];
  helper(0,0,n,'',results);
  return results;
  
  function helper(opened, closed, n, str, results){
    if(str.length === n*2){
      results.push(str);
      return;
    }
    if(opened < n){
      helper(opened+1, closed, n, str+'(', results);
    }
    if(closed < opened){
      helper(opened, closed+1, n, str+')', results);
    }
  }
}

console.log(generateParanthesis(3));//[ '((()))', '(()())', '(())()', '()(())', '()()()' ]