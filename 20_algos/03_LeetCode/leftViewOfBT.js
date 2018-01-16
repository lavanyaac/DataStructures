// Print Left View of a Binary Tree
// Given a Binary Tree, print left view of it. Left view of a Binary Tree is set of nodes visible when tree is visited from left side.

// Examples:

// Input : 
//                  1
//                /   \
//               2     3
//              / \     \
//             4   5     6             
// Output : 1 2 4

// Input :
//         1
//       /   \
//     2       3
//       \   
//         4  
//           \
//             5
//              \
//                6
// Output :1 2 4 5 6

// The left view contains all nodes that are first nodes in their levels. A simple solution is to do level order traversal and print the first node in every level.

function leftViewUtil(node, level, max_level, res){
	if(!node){
		return;
	}
	console.log(max_level, level);
	if(max_level[0] < level){
		res.push(node.val);
		max_level[0] = level;
	}

	leftViewUtil(node.left, level+1, max_level, res);
	leftViewUtil(node.right, level+1, max_level, res);

}

function leftView(root){
	const res = [];
	const max_level = [0];
	leftViewUtil(root, 1, max_level, res);
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

console.log(leftView(BT));//[ 3, 9, 4, 14 ]