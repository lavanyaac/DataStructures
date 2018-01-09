// 263. Ugly Number
// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

// Note that 1 is typically treated as an ugly number.

/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function(num) {
  for(const p of [2,3,5]){
  	while(num && num%p === 0){
  		num = num/p;
  	}
  } 
  return num === 1;
};

console.log(isUgly(6));//true
console.log(isUgly(8));//true
console.log(isUgly(14));//false