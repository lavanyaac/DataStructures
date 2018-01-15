// LRU Cache
// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

const LRUCache = function(limit){
	this.limit = limit;
	this.cache = 	{};
	this.DLL = new DlinkedList();
}
LRUCache.prototype.put = function(key, value){
	const target = this.cache[key];
	if(target !== undefined){	
		target.value = value;
		this.DLL.update(target);
	}else{
		if(this.limit === 0) { return; }
		if(Object.keys(this.cache).length >= this.limit){
			delete this.cache[this.DLL.head.key];
			this.DLL.removeFromHead();
		}
		this.DLL.addToTail(key, value);
		this.cache[key] = this.DLL.tail;
	}
}
LRUCache.prototype.get = function(key){
	const target = this.cache[key];
	if(target !== undefined){	
		const val = target.value;
		this.DLL.update(target);
		return val;
	}
	return -1;
}

const Node = function(key, value){
	this.key = key;
	this.value = value;
	this.next = this.prev = null;
}

const DlinkedList = function(){
	this.head = null;
	this.tail = null;
}

// DlinkedList.prototype.addToTail = function(key, value){
// 	const dNode = new Node(key, value);
// 	if(this.tail === null){
// 		this.head = dNode;
// 		this.tail = dNode;
// 	}else{
// 		this.tail.next = dNode;
// 		dNode.prev = this.tail;
// 		this.tail = dNode;
// 	}
// }


DlinkedList.prototype.addToTail = function(key, value){
	const dNode = new Node(key, value);
	this.addNodeToTail(dNode);
}

DlinkedList.prototype.addNodeToTail = function(node){
	if(this.tail === null){
		this.head = node;
		this.tail = node;
		node.next = null;
		node.prev = null;
	}else{
		this.tail.next = node;
		node.prev = this.tail;
		node.next = null;
		this.tail = node;
	}
}

DlinkedList.prototype.removeFromHead = function(){
	if(this.head){
		if(this.head === this.tail){
			this.head = null;
			this.tail = null;
		}else{
			const oldHead = this.head;
			this.head = this.head.next;
			this.head.prev = null;
			oldHead.next = null;
		}
	}
	return null;
}
DlinkedList.prototype.update = function(node){
	if(node === this.tail){
		return;
	}else{
			if(node === this.head){
				this.head = node.next;
			}else{
				node.prev.next = node.next;
			}
			node.next.prev = node.prev;
			this.addNodeToTail(node);
	}
}


////////////////////////////////////////////////////////////////////////////
const cache = new LRUCache( 2 );
 

cache.put(1, 'A');
// console.log('map', cache.cache)//map { '1': Node { key: 1, value: 1, prev: null, next: null } }
// console.log('DLL', cache.DLL)//DLL DlinkedList {
																  // head: Node { key: 1, value: 1, prev: null, next: null },
																	// tail: Node { key: 1, value: 1, prev: null, next: null } }
console.log("**************************")	
cache.put(2, 'B');
// console.log('map', cache.cache)
// console.log('DLL', cache.DLL)
console.log(cache.get(1));       // returns 1

cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

console.log("**************************")	
console.log('map', cache.cache)
console.log('DLL', cache.DLL)
console.log("**************************")	














