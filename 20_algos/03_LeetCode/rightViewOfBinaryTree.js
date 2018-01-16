// Right view of Binary Tree
// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// For example:
// Given the following binary tree,
//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
// You should return [1, 3, 4].

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function(root) {
	const queue = [];
	const res = [];
	queue.push(root);
	while(queue.length){
		const len = queue.length;
		for(i = 0; i < len; i++){
			const node = queue.shift();
			if(i === 0){res.push(node.val);}
			if(node.right){ queue.push(node.right); }
			if(node.left){ queue.push(node.left); }
		}
	}
	return res;
}

///////////////////////////////////////////////////////////////////

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

console.log(rightSideView(BT));//[ 3, 8, 7, 15 ]

