/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

const HashTable = function(){
 this.storage = [];
 this.storageLimit = 4;
 this.size = 0;
};

HashTable.prototype.insert = function(key, value){
	const index = getIndexBelowMaxForKey(key, this.storageLimit);

	const bucketArray = this.storage[index] || [];
	for(tuple of bucketArray){
		if(tuple && tuple[0] === key){
			tuple[1] = value;
			return;
		}
	}
	bucketArray.push([key, value]);
	++this.size;

	this.storage[index] = bucketArray;

	if(this.size >= this.storageLimit*0.75){
		this.resize(this.storageLimit*2);
	}
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
			--this.size;
			if(this.storageLimit>4 && this.size <= this.storageLimit * 0.25){
				this.resize(this.storageLimit/2);
			}
			return value;
		}
	}
	return null;
};

HashTable.prototype.resize = function(newSize){
	console.log('resize called with: ',newSize, 'old:', this.storageLimit);
	const oldStorage = this.storage.slice();
	this.storage = [];
	this.storageLimit = newSize;
	this.size = 0;

	for(let i = 0; i<oldStorage.length; i++){
		const bucketArray = oldStorage[i];
		if(!bucketArray){
			continue;
		}
		for(tuple of bucketArray){
			if(tuple){
				this.insert(tuple[0], tuple[1]);
			}
		}
	}
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
console.log(hash.size);//2
hash.insert('four', 6);//resize function should be called with new size 8
hash.insert('five', 7);
hash.insert('six', 8);
console.log(hash.size);//6
hash.insert('seven', 9);//resize function should be called with new size 16
hash.insert('eight', 10);
console.log(hash.retrieve('third'))//5
console.log(hash.retrieve('eight'))//10
hash.remove('eight');
hash.remove('four');
hash.remove('five');//resize function should be called with newsize as 8