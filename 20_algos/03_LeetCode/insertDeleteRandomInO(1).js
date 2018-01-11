// 380. Insert Delete GetRandom O(1)
// Design a data structure that supports all following operations in average O(1) time.

// insert(val): Inserts an item val to the set if not already present.
// remove(val): Removes an item val from the set if present.
// getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
// Example:

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
 this.nums = [];
 this.locs = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  const contains = this.locs.hasOwnProperty(val);
  if(contains){ return false; }
  this.locs[val] = this.nums.length;
  this.nums.push(val);
  return true; 
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
 	const contains = this.locs.hasOwnProperty(val);
 	if(!contains) { return false; }
 	const loc = this.locs[val];
 	if(loc < this.nums.length){
 		const lastOne = this.nums[this.nums.length-1];
 		this.nums[loc] = lastOne;
 		this.locs[lastOne] = loc;
 	}
 	delete this.locs[val];
 	this.nums.pop();
 	return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
	const rand = Math.floor(Math.random() * this.nums.length);
  return this.nums[rand];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// Init an empty set.
const randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomSet.insert(1));//true
console.log(randomSet.nums);//[ 1 ]
console.log(randomSet.locs);//{ '1': 0 }
console.log("*****************************");
// Returns false as 2 does not exist in the set.
console.log(randomSet.remove(2));//false
console.log(randomSet.nums);// [1]
console.log(randomSet.locs);//{ '1': 0 }
console.log("*****************************");
// Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomSet.insert(2));//true
console.log(randomSet.nums);// [1, 2]
console.log(randomSet.locs);//{ '1': 0, '2':1 }
console.log("*****************************");
// getRandom should return either 1 or 2 randomly.
console.log(randomSet.getRandom());// 1 0r 2
console.log("*****************************");
// Removes 1 from the set, returns true. Set now contains [2].
console.log(randomSet.remove(1));//true
console.log(randomSet.nums);// [2]
console.log(randomSet.locs);//{ '2': 0 }
console.log("*****************************");
// 2 was already in the set, so return false.
console.log(randomSet.insert(2));//false
console.log(randomSet.nums);// [2]
console.log(randomSet.locs);//{ '2': 0 }
console.log("*****************************");
// Since 2 is the only number in the set, getRandom always return 2.
console.log(randomSet.getRandom());//2