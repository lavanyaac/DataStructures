/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

const largestProductOfthree = (arr) => {
	const inp = arr.slice().sort((a,b)=>{
		return a-b;
	});

	const productOfFirst2Elements = inp[0] * inp[1];
	const productOfLast2Elements = inp[inp.length -2] * inp[inp.length -3];
	return inp[inp.length - 1] * Math.max(productOfFirst2Elements, productOfLast2Elements);
}

const arr = [2, 1, 3, 7];
console.log(largestProductOfthree(arr));//42