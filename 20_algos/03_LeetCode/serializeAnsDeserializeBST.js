// Serialize and De-serialize BST
// Serialization is the process of converting a data structure or object into a 
// sequence of bits so that it can be stored in a file or memory buffer, 
// or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary search tree. 
// There is no restriction on how your serialization/deserialization algorithm should work. 
// You just need to ensure that a binary search tree can be serialized to a string 
// and this string can be deserialized to the original tree structure.

// The encoded string should be as compact as possible.

// Note: Do not use class member/global/static variables to store states. 
// Your serialize and deserialize algorithms should be stateless.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const splitter = ',';
    const nn = 'x';
    const res = []
    serial(root, res);
    return res.join('');

    function serial(node, res){
    	if(!node){
    		res.push(nn);
    		res.push(splitter);
    	}else{
    		res.push(node.val);
    		res.push(splitter);

    		serial(node.left, res);
    		serial(node.right, res);
    	}
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const arr = data.split(',');
    return deserial(arr);

    function deserial(q){
    	const curr = q.shift();
    	if(curr === 'x'){
    		return null;
    	}
    	const node = new BinaryTree(parseInt(curr));
    	node.left = deserial(q);
    	node.right = deserial(q);
    	return node;
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 ////////////////////////////////////////////////////////////////////////////////////////
function BinaryTree(val) {
  this.val = val;
  this.left = this.right = null;
}

var BT = new BinaryTree(1);
BT.left = new BinaryTree(2);
BT.right = new BinaryTree(3);

BT.left.left = new BinaryTree(4);

BT.right.left = new BinaryTree(5);
BT.right.right = new BinaryTree(6);

BT.right.left.left = new BinaryTree(7);

let a = serialize(BT);//1,2,4,x,x,x,3,5,7,x,x,x,6,x,x,
console.log(a);

let b = deserialize(a);
// console.log(b)
let c = serialize(b);

console.log(c);