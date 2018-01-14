// 155. Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this.array = [];  
};

// /** 
//  * @param {number} x
//  * @return {void}
//  */
MinStack.prototype.push = function(x) {
  const mini = this.getMin() || Number.POSITIVE_INFINITY;
  this.array.push({
  	value: x,
  	mini: Math.min(mini, x)
  });
};

// /**
//  * @return {void}
//  */
MinStack.prototype.pop = function() {
   if(this.array.length){
   	return this.array.pop().value;
   } 
   return;
};

// /**
//  * @return {number}
//  */
MinStack.prototype.top = function() {
  if(this.array.length > 0){
  	const item =  this.array[this.array.length - 1];
  	return item.value;
  }
  return ;
};

// /**
//  * @return {number}
//  */
MinStack.prototype.getMin = function() {
  if(this.array.length > 0){
  	return this.array[this.array.length - 1].mini;
  }
  return; 
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   //--> Returns -3.
console.log(minStack.pop());// Returns -3
console.log(minStack.top());      //--> Returns 0.
console.log(minStack.getMin());   //--> Returns -2.

