// Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

// Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: True
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: False
// Note:
// The input array won't violate no-adjacent-flowers rule.
// The input array size is in the range of [1, 20000].
// n is a non-negative integer which won't exceed the input array size.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
   let count = 0;
   let ptr = 0;

   while(ptr < flowerbed.length){
   	if(flowerbed[ptr] === 0){
   		const next = (ptr === flowerbed.length - 1)? 0: flowerbed[ptr+1];
   		const prev = (ptr === 0)? 0: flowerbed[ptr-1];
   		if(!next && !prev){
   			++count;
   			++ptr;
   		}
   		
   	}
   	console.log(count, n);
   	if(count >= n){
   			return true;
   		}
   	++ptr;
   }
   return false;
};

const f1 = [1,0,0,0,1];
const f2 = [0,0,0,0,0,1,0,0];
// console.log(canPlaceFlowers(f1, 2));//false
// console.log(canPlaceFlowers(f1, 1));//true

console.log(canPlaceFlowers(f2, 0));//true
console.log(canPlaceFlowers([0], 0));//true
console.log(canPlaceFlowers([1,1,1,1,1], 0));//true
