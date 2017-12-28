/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
const getIndexBelowMaxForKey = function(str, max) {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

const HashTable = function(){
 this.storage = [];
 this.storageLimit = 10000;
};

HashTable.prototype.insert = function(key, value){
	const index = getIndexBelowMaxForKey(key, this.storageLimit);

	const bucketArray = this.storage[index] || [];
	for(tuple of bucketArray){
		if(tuple[0] === key){
			tuple[1] = value;
			return;
		}
	}
	bucketArray.push([key, value]);
	this.storage[index] = bucketArray;
};

HashTable.prototype.retrieve = function(key){
	const index = getIndexBelowMaxForKey(key, this.storageLimit);

	const bucketArray = this.storage[index];

	if(!bucketArray){
		return null;
	}
	for(tuple of bucketArray){
		if(tuple && tuple[0] === key){
			return tuple[1];
		}
	}
	return null;
};

HashTable.prototype.remove = function(key){
	const index = getIndexBelowMaxForKey(key, this.storageLimit);

	const bucketArray = this.storage[index];

	if(!bucketArray){
		return null;
	}
	for([i,tuple] of bucketArray.entries()){
		if(tuple && tuple[0] === key){
			const value = tuple[1];
			delete bucketArray[i];
			return value;
		}
	}
	return null;
};

const hash = new HashTable();
hash.insert('first', 3);
hash.insert(1112, 4);
// console.log(hash.storage);
console.log(hash.retrieve(1112)) //4
console.log(hash.retrieve('first')) //3
hash.remove(1112)
console.log(hash.retrieve(1112))//null
hash.remove('first')
console.log(hash.retrieve('first'))//null
hash.insert('second', 'hello')
console.log(hash.retrieve('second'))//hello
hash.insert('second', 'new')
console.log(hash.retrieve('second'))//new
hash.insert('third', 5);
hash.insert('four', 6);
hash.insert('five', 7);
hash.insert('six', 8);
hash.insert('seven', 9);
hash.insert('eight', 10);
console.log(hash.retrieve('third'))//5
console.log(hash.retrieve('eight'))//10
