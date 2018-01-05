// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// For example, 
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = height.length - 1;
  let volume = 0;

  while(left<right){
  	if(height[left] < height[right]){
  		(height[left] >= leftMax) ? (leftMax = height[left]): volume += leftMax - height[left];
  		++left;
  	}else{
  		(height[right] >= rightMax) ? (rightMax = height[right]): volume += rightMax - height[right];
  		--right;
  	}
  }
  return volume;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));//6