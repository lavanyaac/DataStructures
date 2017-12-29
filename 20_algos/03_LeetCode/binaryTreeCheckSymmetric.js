/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//   / \
//   2   2
// / \ / \
// 3  4 4  3
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
	return helper(root.left, root.right);

	function helper(node1, node2){
		if(!node1 && !node2){
			return true;
		}
		if((!node1 && node2) ||(node1 && !node2)) {
			return false;
		}
		return (helper(node1.left, node2.right) && helper(node1.right, node2.left));
	}
}

function BinaryTree(val) {
  this.val = val;
  this.left = this.right = null;
}

var BT = new BinaryTree(3);

BT.left = new BinaryTree(2);
BT.right = new BinaryTree(2);

BT.left.left = new BinaryTree(3);
BT.left.right = new BinaryTree(4);

BT.right.left = new BinaryTree(4);
BT.right.right = new BinaryTree(3);

// BT.right.right.right = new BinaryTree(15);//uncomment for false

console.log(isSymmetric(BT));//true