/////////////////////////////////////////////////////////////////////////////////////////////////////////
//3. Binary Tree Level Order Traversal
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//   / \
//   9  20
//     /  \
//   15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
	const results = [];
	const queue = [];

	queue.push(root);
	while(queue.length){
		const len = queue.length;
		const level = []
		for(let i=0; i<len; i++){
			const node = queue.shift();
			level.push(node.val);
			if(node.left){
				queue.push(node.left);
			}
			if(node.right){
				queue.push(node.right);
			}
		}
		results.push(level);
	}

	return results;
}

function BinaryTree(val) {
  this.val = val;
  this.left = this.right = null;
}

var BT = new BinaryTree(3);

BT.left = new BinaryTree(9);
BT.right = new BinaryTree(8);

BT.left.left = new BinaryTree(4);
BT.left.right = new BinaryTree(0);

BT.right.left = new BinaryTree(1);
BT.right.right = new BinaryTree(7);

BT.right.right.right = new BinaryTree(15);
console.log(levelOrder(BT));//[ [ 3 ], [ 9, 8 ], [ 4, 0, 1, 7 ], [ 15 ] ]