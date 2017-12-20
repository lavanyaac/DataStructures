/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

 const balancedParens = (str) => {
 	const stack = [];
 	const parens = {
 		'(': ')',
 		'[': ']',
 		'{': '}'
 	}
 	const openParens = ['(', '[', '{'];
 	const closeParens = [')', ']', '}'];

 	for(const char of str){
 		if(openParens.includes(char)){
 			stack.push(parens[char]);
 		}else if(closeParens.includes(char)){
 			if(stack.pop() !== char){
 				return false;
 			}
 		}
 	}
 	return true;
 };

 console.log(balancedParens('[](){}'));//true
 console.log(balancedParens('[({})]'));//true
 console.log(balancedParens('[(]{)}'));//false