/////////////////////////////////////////////////////////////////////////////////////////////////////////
//4. Maximum depth of Binary Tree
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
	if(!root){
		return 0;
	}
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
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
console.log(maxDepth(BT));//4