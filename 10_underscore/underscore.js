//***********Underscore***************
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
// _.reduce

_.reduce = (collection, cb, accumulator) => {
  _.each(collection, (item)=>{
    if(accumulator === undefined){
      accumulator = item;
    }else{
      accumulator = cb(accumulator, item);
    }
  });
  return accumulator;
};

// Determine if the array or object contains a given value (using `===`).
  // _.contains
_.contains = (collection, key) => {
  return _.reduce(collection, (isFound, item)=>{
    if(isFound){
      return true;
    }
    return item === key;
  }, false);
};

// Determine whether all of the elements match a truth test.
  // _.every
_.every = (collection, cb) => {
  cb = cb || _.identity;

  return _.reduce(collection, (status, item) => {
    if(!status){
      return false;
    }
    return !!cb(item);
  }, true);
};

// Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  // _.some
_.some = (collection, cb) => {
  cb = cb || _.identity;

  return _.reduce(collection, (status, item) => {
    if(status){
      return true;
    }
    return !!cb(item);
  }, false)
};

// Extend a given object with all the properties of the passed in
// object(s).
// _.extend
_.extend = (destination, ...sources) => {
  _.each(sources, (obj) =>{
    for(const key in obj){
      destination[key] = obj[key];
    }
  });
  return destination;
};


// Like extend, but doesn't ever overwrite a key that already
// exists in obj
// _.defaults
_.defaults = (destination, ...sources) => {
  _.each(sources, (obj) =>{
    for(const key in obj){
      if(!destination[key]){
        destination[key] = obj[key];
      }
    }
  });
  return destination;
};

// Return a function that can be called at most one time. Subsequent calls
// should return the previously returned value.
// _.once
_.once = (func) => {
  let results;

  return (...args)=>{
    if(results === undefined){
      results = func.apply(this, args);
    }
    return results;
  };
};
// Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  // _.memoize

_.memoize = function(func){
  let results = {};

  return(...args)=>{
    const stringArgs = JSON.stringify(args);
    if(results[stringArgs] === undefined){
      results[stringArgs] = func.apply(this, args);
    }
    return results[stringArgs];
  };
};

// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
//
// The arguments for the original function are passed after the wait
// parameter. For example _.delay(someFunction, 500, 'a', 'b') will
// call someFunction('a', 'b') after 500ms
// _.delay

_.delay = (func, wait, ...args) => {
  setTimeout(()=>{return func.apply(null, args)}, wait);
};

// Randomizes the order of an array's contents.
// _.shuffle  - Fisher-Yates method
_.shuffle = (array) => {
  const shuffled = array.slice();
  for(let i = shuffled.length-1; i >= 0; i--){
    const randomIndex = Math.floor(Math.random()*(i+1));
    const valAtRandomIndex = shuffled[randomIndex];

    shuffled[randomIndex] = shuffled[i];
    shuffled[i] = valAtRandomIndex;
  }
  return shuffled;
};

// Calls the method named by functionOrKey on each value in the list.
// Note: You will need to learn a bit about .apply to complete this.
// _.invoke
// _.invoke = (collection, functionOrKey, ...args) => {
//   const results = [];
//   if(Array.isArray(collection)){

//     for(const everyElement of collection){
//       if(typeof functionOrKey !== 'function'){
//         functionOrKey = everyElement[functionOrKey];
//       }
//       results.push(functionOrKey.apply(everyElement, args));
//     }
//   }else{
//     for(const key in collection){
//       results.push(collection[key][functionOrKey].apply(collection[key], args));
//     }
//   }
//   return results;
// };
_.invoke = (collection, functionOrKey, ...args) => {
  const isFunc = typeof functionOrKey === 'function';
  return _.map(collection, (item)=>{
    return (isFunc? functionOrKey: item[functionOrKey]).apply(item, args);
  });
};

// Sort the object's values by a criterion produced by an iterator.
// If iterator is a string, sort objects by that property with the name
// of that string. For example, _.sortBy(people, 'name') should sort
// an array of people by their name.
// _.sortBy
_.sortBy = (collection, iterator) => {
  const isString = typeof(iterator) === 'string';
  return collection.sort((a, b) => {
    return isString ? a[iterator] - b[iterator]: iterator(a) - iterator(b);
  });
};

// Zip together two or more arrays with elements of the same index
// going together.
//
// Example:
// _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
// _.zip
_.zip = (...args) => {
  const length = Math.max.apply(null, _.pluck(args, 'length').concat(0));
  const results = new Array(length);
  for(let i = 0; i<length; i++){
    results[i] = _.pluck(args, ''+i);
  }
  return results;
};

// Takes a multidimensional array and converts it to a one-dimensional array.
// The new array should contain all elements of the multidimensional array.
// _.flatten
_.flatten = (arr, flatArr=[]) => {
  if(!Array.isArray(arr)){
    return flatArr.push(arr);
  }else{
    for(const everyElement of arr){
      _.flatten(everyElement, flatArr);
    }
  }
  return flatArr;
};

// Takes an arbitrary number of arrays and produces an array that contains
// every item shared between all the passed-in arrays.
// _.intersection

_.intersection = (...args) => {
  const rest = args.slice(1);
  const uniqArr = _.uniq(args[0]);

  return _.filter(uniqArr, (item) => {
    return _.every(rest, (everyArr) => {
      return everyArr.includes(item);
    });
  });
};


// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
// _.difference 
_.difference = (...args) => {
  const rest = args.slice(1);
  const uniqArr = _.uniq(args[0]);

  return _.reject(uniqArr, (item) => {
    return _.some(rest, (everyArr) => {
      return everyArr.includes(item);
    });
  });
}

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time.  See the Underbar readme for extra details
// on this function.
//
// _.throttle
_.throttle = (func, windowOfTime) => {
  let inThrottle;
  let lastRan;
  let lastFunc;
  return (...args)=> {
    if(!inThrottle){
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
    }else{
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function(){
        if((Date.now() - lastRan) >= windowOfTime){
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, windowOfTime-(Date.now() - lastRan))
    }
  }
};

module.exports = _;

