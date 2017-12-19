/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

 var characterFrequency = function(string) {
 	const resObj = {};
 	const inp = string.split('');
 	for(const val of string){
  	resObj[val] = resObj[val] || 0;
  	resObj[val] += 1;
  }
  
  const keys = Object.keys(resObj);
  const result = keys.map((key) => {
  	return [key, resObj[key]];
  });
  result.sort((a, b)=>{
  	if(a[1] > b[1]){ return -1 }
  	if(a[1] < b[1]){ return 1 }
  	if(a[0] > b[0]){ return 1 }
  	if(a[0] < b[0]){ return -1 }
  })
  return result;
};

console.log(characterFrequency('mmmaaaiiibbb'));//[ [ 'a', 3 ], [ 'b', 3 ], [ 'i', 3 ], [ 'm', 3 ] ]
console.log(characterFrequency('miaaiaaippi'));//[ [ 'a', 4 ], [ 'i', 4 ], [ 'p', 2 ], [ 'm', 1 ] ]
console.log(characterFrequency('mississippi'));//[ [ 'i', 4 ], [ 's', 4 ], [ 'p', 2 ], [ 'm', 1 ] ]