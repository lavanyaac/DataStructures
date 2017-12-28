/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';

var LinkedList = function() {
	this.head = null;
	this.tail = null;
}

LinkedList.prototype.makeNode = function(value) {
	this.value = value;
	this.next = null;
};

LinkedList.prototype.addToTail = function(value) {
	const node =  new this.makeNode(value);
	if(!this.head){
		this.head = node;
	}
	if(this.tail){
		this.tail.next = node;
	}
	this.tail = node;
};

LinkedList.prototype.removeHead = function() {
	const toBeReturned = this.head;
	if(!this.head){
		return null;
	}
	if(this.head === this.tail){
		this.tail = null;
	}
	this.head = this.head.next;
	toBeReturned.next = null;

	return toBeReturned.value;
};

LinkedList.prototype.contains = function(target) {
	if(!this.head){
		return false;
	}
	let currNode = this.head;
	while(currNode){
		if(currNode.value === target){
			return true;
		}
		currNode = currNode.next;
	}
	return false;
};



const list = new LinkedList();
console.log(list.tail);         //yields 'null'
list.addToTail(4);
list.addToTail(5);
console.log(list.head.value);   //yields '4';
console.log(list.contains(5));  //yields 'true';
console.log(list.contains(6));  //yields 'false';
console.log(list.removeHead()); //yields '4';
console.log(list.tail.value);   //yields '5';
console.log(list.removeHead()); //yields '5';
console.log(list.removeHead()); //yields 'null';