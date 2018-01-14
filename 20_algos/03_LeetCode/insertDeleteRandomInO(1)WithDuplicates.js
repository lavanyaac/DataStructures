// Design a data structure that supports all following operations in average O(1) time.

// Note: Duplicate elements are allowed.
// insert(val): Inserts an item val to the collection.
// remove(val): Removes an item val from the collection if present.
// getRandom: Returns a random element from current collection of elements. The probability of each element being returned is linearly related to the number of same value the collection contains.
// Example:

/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.nums = [];
  this.locs = {};
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  const contains = !this.locs.hasOwnProperty(val);
  
  const idxs = this.locs[val] || [];
  idxs.push(this.nums.length);
  this.locs[val] = idxs;

  this.nums.push([val, idxs.length-1]);

  return contains;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  const contains = this.locs.hasOwnProperty(val);
  if(contains){
    const valList = this.locs[val];
    const valLastIdx = valList[valList.length - 1];

    const swapNum = this.nums[this.nums.length-1];
    const [swapVal, swapidx] = swapNum;
    
    this.locs[swapVal][swapidx] = valLastIdx;
    this.nums[valLastIdx] = swapNum;

    if(valList.length === 1){
      delete this.locs[val];
    }else{
      valList.pop();
    }
    this.nums.pop();
  }
  return contains;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  const rand = Math.floor(Math.random() * this.nums.length);
  return this.nums[rand][0];  
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = Object.create(RandomizedCollection).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// Init an empty collection.
const collection = new RandomizedCollection();

// Inserts 1 to the collection. Returns true as the collection did not contain 1.
// console.log(collection.insert(1));//true
// console.log(collection.nums);//[ 1 ]
// console.log(collection.locs);//{ '1': [0] }
// console.log("*****************************");
// // Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
// console.log(collection.insert(1));//false
// console.log(collection.nums);//[ 1, 1 ]
// console.log(collection.locs);//{ '1': [0,1] }
// console.log("*****************************");
// // Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
// console.log(collection.insert(2));//true
// console.log(collection.nums);//[ 1, 1, 2 ]
// console.log(collection.locs);//{ '1': [0,1], '2':[2] }
// console.log("*****************************");
// // getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
// console.log(collection.getRandom());//1 or 2
// console.log("*****************************");
// // Removes 1 from the collection, returns true. Collection now contains [1,2].
// console.log(collection.remove(1));//true
// console.log(collection.nums);//[ 1, 2 ]
// console.log(collection.locs);//{ '1': [0], '2':[1] }
// console.log("*****************************");
// // getRandom should return 1 and 2 both equally likely.
// console.log(collection.getRandom());
// console.log("*****************************");
// console.log(collection.remove(1));//true
// console.log(collection.nums);//[ 2 ]
// console.log(collection.locs);//{ 2':[0] }
// console.log("*****************************");
// console.log(collection.remove(2));//true
// console.log(collection.nums);//[ ]
// console.log(collection.locs);//{ }
// console.log("*****************************");
// console.log(collection.insert(1));//true
// console.log(collection.nums);//[ 1 ]
// console.log(collection.locs);//{ '1': [0] }
// console.log("*****************************");


// console.log(collection.insert(4));//true
// console.log(collection.insert(3));//true
// console.log(collection.insert(4));//false
// console.log(collection.insert(2));//true
// console.log(collection.insert(4));//false
// console.log(collection.nums);//[[ 4, 3, 4, 2, 4 ]
// console.log(collection.locs);//{ '2': [ 3 ], '3': [ 1 ], '4': [ 0, 2, 4 ] }
// console.log("*****************************");
// console.log(collection.remove(4));//true
// console.log(collection.remove(3));//true
// console.log(collection.remove(4));//true
// console.log(collection.nums);//[ 4, 2, 4 ]
// console.log(collection.locs);//{ '2': [ 1 ], '4': [ 0 ] }
// console.log(collection.remove(4));//true
// console.log(collection.nums);//[ 4, 2, 4 ]
// console.log(collection.locs);//{ '2': [ 1 ], '4': [ 0 ] }

console.log(collection.insert(1));//true
console.log(collection.insert(1));//false
console.log(collection.insert(2));//true
console.log(collection.insert(2));//false
console.log(collection.insert(2));//false
console.log(collection.nums);//[ [ 1, 0 ], [ 1, 1 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ]
console.log(collection.locs);//{ '1': [ 0, 1 ], '2': [ 2, 3, 4 ] }
console.log("*****************************");
console.log(collection.remove(1));//true
// console.log(collection.remove(1));//true
// console.log(collection.remove(2));//true
console.log(collection.nums);//[[ [ 2, 1 ], [ 2, 0 ] ]
console.log(collection.locs);//{ '2': [ 1, 0 ] }
