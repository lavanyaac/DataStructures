// Find Largest Value in each Tree row
// You need to find the largest value in each row of a binary tree.

// Example:
// Input: 

//           1
//         / \
//         3   2
//       / \   \  
//       5   3   9 

// Output: [1, 3, 9]
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = function(root) { 
	const res = [];
	helper(root, 0);
	return res;

	function helper(node, depth){
		if(!node){
			return;
		}
		res[depth] = res[depth] !== undefined ? Math.max(node.val, res[depth]): node.val;
		helper(node.left, depth+1);
		helper(node.right, depth+1);
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

BT.right.left.left = new BinaryTree(7);

console.log(largestValues(BT));//[ 3, 9, 7, 7 ]