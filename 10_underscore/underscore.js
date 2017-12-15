//***********Checklist***************
//_.identity
//_.first
//_.last
//_.each
//_.indexOf
//_.filter
//_.reject
//_.uniq
//_.map
//_.pluck
//_.reduce
//_.contains
//_.every
//_.some
//*****Objects
//_.extend
//_.defaults
//*****Functions
//_.once
//_.memoize
//_.delay
//_.shuffle
//_.invoke
//_.sortBy
//_.zip
//_.flatten
//_.intersection
//_.difference
//_.throttle
//***********************************
_ = {};


// identity:  
// Returns whatever value is passed as the argument. This function doesn't
// seem very useful, but remember it--if a function needs to provide an
// iterator when the user does not pass one in, this will be handy.
_.identity = (val) => {
  return val;
}

/**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

// Return an array of the first n elements of an array. If n is undefined,
// return just the first element.
//_.first 
_.first = (array, n=0) => {
  return (n === 0) ? array[0]: array.slice(0, n);
};


// Like first, but for the last elements. If n is undefined, return just the
// last element.
//_.last
_.last = (array, n) => {
  const len = array.length;
  return (n === undefined)? array[len-1]: array.slice(len-n);
};

// Call iterator(value, key, collection) for each element of collection.
// Accepts both arrays and objects.
//
// Note: _.each does not have a return value, but rather simply runs the
// iterator function over each item in the input collection.
// _.each 
_.each = (collection, cb) =>{
  if(typeof collection !== 'object'){
    return collection;
  }
  if(Array.isArray(collection)){
    for(let index = 0; index<collection.length; index++){
      cb(collection[index], index, collection);
    }
  }else{
    for(const key in collection){
      cb(collection[key], key, collection);
    }
  }
};

// Returns the index at which value can be found in the array, or -1 if value
// is not present in the array.
// _.indexOf
_.indexOf = (array, target) => {
  for([i, v] of array.entries()){
    if(v === target){
      return i;
    }
  }
  return -1;
};

// Return all elements of an array that pass a truth test.
// _.filter
_.filter = (collection, test) => {
  const results = [];

  _.each(collection, (item) => {
    if(test(item)){
      results.push(item);
    }
  });
  return results;
};

// Return all elements of an array that don't pass a truth test.
// _.reject
_.reject = (collection, test) => {
  const results = [];

  _.each(collection, (item) => {
    if(!test(item)){
      results.push(item);
    }
  });
  return results;
};

// Produce a duplicate-free version of the array.
// _.uniq
_.uniq = (array) => {
  const results = [];

  for(const item of array){
    if(!results.includes(item)){
      results.push(item);
    }
  }
  return results;
};

// Return the results of applying an iterator to each element.
// _.map
_.map = (collection, cb) => {
  const results = [];

  _.each(collection, (item, index, collection)=>{
    results.push(cb(item, index, collection));
  });
  return results;
};

// Takes an array of objects and returns and array of the values of
// a certain property in it. E.g. take an array of people and return
// an array of just their ages
// _.pluck
_.pluck = (collection, key) => {
  return _.map(collection, (item) => {
    return item[key];
  });
}

// Reduces an array or object to a single value by repetitively calling
// iterator(accumulator, item) for each item. accumulator should be
// the return value of the previous iterator call.
//  
// You can pass in a starting value for the accumulator as the third argument
// to reduce. If no starting value is passed, the first element is used as
// the accumulator, and is never passed to the iterator. In other words, in
// the case where a starting value is not passed, the iterator is not invoked
// until the second element, with the first element as its second argument.
//  
// Example:
//   var numbers = [1,2,3];
//   var sum = _.reduce(numbers, function(total, number){
//     return total + number;
//   }, 0); // should be 6
//  
//   var identity = _.reduce([5], function(total, number){
//     return total + number * number;
//   }); // should be 5, regardless of the iterator function passed in
//          No accumulator is given so the first element is used.
// _.reduce

// Determine if the array or object contains a given value (using `===`).
  // _.contains

// Determine whether all of the elements match a truth test.
  // _.every

// Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  // _.some

/**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla

 // _.extend


// Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  // _.defaults

/**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  // _.once

// Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  // _.memoize

// Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  // _.delay

/**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice

  // _.shuffle  

/**
   * ADVANCED
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  // _.invoke

// Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  // _.sortBy


// Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  // _.zip

// Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  // _.flatten


// Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  // _.intersection


// Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  // _.difference 


// Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  // _.throttle

module.exports = _;

