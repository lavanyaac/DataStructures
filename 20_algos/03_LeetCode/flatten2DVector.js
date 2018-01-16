//Flatten 2D Vector
// Implement an iterator to flatten a 2d vector.

// For example,
// Given 2d vector =

// [
//   [1,2],
//   [3],
//   [4,5,6]
// ]
// By calling next repeatedly until hasNext returns false, 
// the order of elements returned by next should be: [1,2,3,4,5,6].


/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
  this.stack = [];
  for(let i = vec2d.length-1; i>=0; i--){
  	this.stack.push(vec2d[i]);
  }
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
  while(this.stack.length){
  	let curr = this.stack[this.stack.length - 1];
  	if(typeof curr !== 'object'){
  		return true;
  	}
  	curr = this.stack.pop();
  	for(let i = curr.length -1; i>=0; i--){
  		this.stack.push(curr[i]);
  	}
  }
  return false;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
   return this.stack.pop();
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

const A = [
  [1,2],
  [3],
  [4,5,6]
]
const iter = new Vector2D(A);

while(iter.hasNext()){
	console.log(iter.next());//1,2,3,4,5,6
}
