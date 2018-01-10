// Binary Tree Zigzag level traversal
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//   / \
//   9  20
//     /  \
//   15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
	const queue = [];
	const res = [];
	let depth = 0;
	queue.push(root);

	while(queue.length){
		const len = queue.length;
		const sub = [];
		const  type = (depth%2) ? 'even' : 'odd';
		for(let i = 0; i<len; i++){
			const node = queue.shift();
			if(type === 'even'){
				sub.unshift(node.val);
			}else{
				sub.push(node.val);
			}
			if(node.left){ queue.push(node.left);}
			if(node.right){ queue.push(node.right);}
		}
		res.push(sub);
		depth += 1;
	}
	return res;
};

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

BT.right.right.left = new BinaryTree(13);
BT.right.right.right = new BinaryTree(15);

console.log(zigzagLevelOrder(BT));//[ [ 3 ], [ 8, 9 ], [ 4, 0, 1, 7 ], [ 15, 13 ] ]