// 297. Serialize and Deserialize Binary Tree
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. 
// There is no restriction on how your serialization/deserialization algorithm should work. 
// You just need to ensure that a binary tree can be serialized to a string and 
// this string can be deserialized to the original tree structure.

// For example, you may serialize the following tree

//     1
//    / \
//   2   3
//      / \
//     4   5
// as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. 
// You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
// Note: Do not use class member/global/static variables to store states. 
// Your serialize and deserialize algorithms should be stateless.

/**
 * Definition for a binary tree node.
 // * function TreeNode(val) {
 // *     this.val = val;
 // *     this.left = this.right = null;
 // * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
	const splitter = ',';
	const NN = 'x';
	const res = [];
	buildString(root, res);
	return res.join('');

	function buildString(node, res){
		if(node === null){
			res.push(NN);
			res.push(splitter);
		}else{
			res.push(node.val);
			res.push(splitter);
			buildString(node.left, res);
			buildString(node.right, res);
		}
	}
}

const deserialize = function(str){
	const arr = str.split(',');
	return deserial(arr);

	function deserial(arr){
		const val = arr.shift();
		if(val === 'x'){
			return null;
		}
		const node = new BinaryTree(parseInt(val));
		node.left = deserial(arr);
		node.right = deserial(arr);
		return node;
	}
}
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
console.log(b);

let c = serialize(b);
console.log(c);
console.log(a);






























