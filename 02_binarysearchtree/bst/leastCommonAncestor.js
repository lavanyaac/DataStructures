const BST = require('../binarysearchtree');

//********************************************************************************
// Find Least Common Ancestor - BT
//********************************************************************************
const leastCommonAncestorBT = function(root, node1, node2){
	if(root === null){
		return null;
	}

	if(root === node1 || root === node2){
		return root;
	}

	const left = leastCommonAncestorBT(root.left, node1, node2);
	const right = leastCommonAncestorBT(root.right, node1, node2);

	if(left && right){
		return root;
	}

	return left !== null ? left: right;
}
//********************************************************************************
// Find Least Common Ancestor - BST
//********************************************************************************
const leastCommonAncestorBST = function(root, node1, node2){
	if(root === null){
		return null;
	}

	if(root.val > node1.val && root.val > node2.val){
		return leastCommonAncestorBST(root.left, node1, node2);
	}else if(root.val < node1.val && root.val < node2.val){
		return leastCommonAncestorBST(root.right, node1, node2);
	}
	return root;
}
//********************************************************************************


	// return left !== null ? left: right!==null? right : null

var bst = new BST();
bst.insert(6);
bst.insert(5);
bst.insert(16);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(15);
bst.insert(20);
bst.insert(18);
bst.insert(21);

// bst.root.val = 17;//uncomment for false

function print(node){
	console.log(node.val);
}
// bst.inOrderTraveral(bst.root, print);//1 2 3 5 6 15 16 18 20 21
const node1 = bst.root.right.left;
const node2 = bst.root.right.right;
// console.log(leastCommonAncestorBT(bst.root, node1, node2));//16

console.log(leastCommonAncestorBST(bst.root, node1, node2));//16
