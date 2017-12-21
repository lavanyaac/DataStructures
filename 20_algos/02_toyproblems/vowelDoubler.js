// Given an array of characters, return the array with every vowel doubled. For example:

// ['w','h','a','t',' ','o','n',' ','e','a','r','t','h',' ','a','r','e',' ','y','o','u',' ','t','a','l','k','i','n','g',' ','a','b','o','u','t','?']

// ==>

// ['w','h','a','a','t',' ','o','o','n',' ','e','e','a','a','r','t','h',' ','a','a','r','e','e',' ','y','o','o','u','u',' ','t','a','a','l','k','i','i','n','g',' ','a','a','b','o','o','u','u','t','?']
// Constraints

// The challenge in this problem is in meeting its (arbitrary) constraints:

// Do not convert into strings or manipulate strings at all.
// Do not create any other data structures.
// In particular, don't instantiate a new array.
// The big-O of the solution should be O(n).

const vowelDoubler = (arr) => {
	for(const[i, val] of arr.entries()){
		if(['a','e','i','o','u'].includes(val)){
			arr[i] = val+val;
		}
	}
}

const A = ['w','h','a','t',' ','o','n',' ','e','a','r','t','h',' ','a','r','e',' ','y','o','u',' ','t','a','l','k','i','n','g',' ','a','b','o','u','t','?'];
vowelDoubler(A);
console.log(A);
//[ 'w',
  // 'h',
  // 'aa',
  // 't',
  // ' ',
  // 'oo',
  // 'n',
  // ' ',
  // 'ee',
  // 'aa',
  // 'r',
  // 't',
  // 'h',
  // ' ',
  // 'aa',
  // 'r',
  // 'ee',
  // ' ',
  // 'y',
  // 'oo',
  // 'uu',
  // ' ',
  // 't',
  // 'aa',
  // 'l',
  // 'k',
  // 'ii',
  // 'n',
  // 'g',
  // ' ',
  // 'aa',
  // 'b',
  // 'oo',
  // 'uu',
  // 't',
  // '?' ]