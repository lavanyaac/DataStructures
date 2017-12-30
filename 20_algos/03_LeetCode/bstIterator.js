/////////////////////////////////////////////////////////////////////////////////////////////////////////
//19. BST iterator
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

// Calling next() will return the next smallest number in the BST.

// Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
const BSTIterator = function(root) {
	this.stack = [];
	this._pushAll(root);
}

BSTIterator.prototype.hasNext = function() {
	return (this.stack.length > 0);
}

BSTIterator.prototype.next = function() {
	if(this.stack.length > 0){
		const node = this.stack.pop();
		this._pushAll(node.right);
		return node.val;
	}
}

BSTIterator.prototype._pushAll  = function(node){
	while(node){
		this.stack.push(node);
		node = node.left;
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function BinaryTree(val) {
  this.val = val;
  this.left = this.right = null;
}


const BT = new BinaryTree(6);
BT.left = new BinaryTree(5);
BT.right = new BinaryTree(16);
BT.left.left = new BinaryTree(2);
BT.left.left.left = new BinaryTree(1);
BT.left.left.right = new BinaryTree(3);
BT.right.left = new BinaryTree(15);
BT.right.right = new BinaryTree(20);
BT.right.right.left = new BinaryTree(18);
BT.right.right.right = new BinaryTree(21);

const BT1 = new BinaryTree(6);
BT1.right = new BinaryTree(16);
BT1.right.right = new BinaryTree(20);

const i = new BSTIterator(BT1), a = [];
while(i.hasNext()){
  a.push(i.next());
}
console.log(a);

//BT - [ 1, 2, 3, 5, 6, 15, 16, 18, 20, 21 ]
//BT1 - [ 6, 16, 20 ]