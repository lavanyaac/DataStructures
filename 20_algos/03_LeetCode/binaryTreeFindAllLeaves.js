/////////////////////////////////////////////////////////////////////////////////////////////////////////
//6. Find all leaves of BT
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

// Example:
// Given binary tree 
//           1
//         / \
//         2   3
//       / \     
//       4   5    
// Returns [4, 5, 3], [2], [1].
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const findLeaves = function(root) {
	if(!root){
		return null;
	}
	const results = [];
	findLeavesHelper(root, results);
	return results;

	function findLeavesHelper(node, results){
		if(!node){
			return 0;
		}
		const level = 1+Math.max(findLeavesHelper(node.left, results), findLeavesHelper(node.right, results));
		results[level-1] = results[level-1] || [];
		results[level-1].push(node.val);
		return level;
	}
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
console.log(findLeaves(BT));//[ [ 4, 0, 1, 15 ], [ 9, 7 ], [ 8 ], [ 3 ] ]
