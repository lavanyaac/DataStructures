const BST = require('../binarysearchtree');

//********************************************************************************
// Validate BST
//********************************************************************************
const validateBST = function(root){
	const min = Number.POSITIVE_INFINITY;
	const max = Number.NEGTAIVE_INFINITY;

	return validateBSTHelper(root, min, max);
}

const validateBSTHelper = function(node, min, max){
	if(!node){
		return true;
	}
	if(node.val<min || node.val>max){
		return false;
	}
	return validateBSTHelper(node.left, min, node.val-1) && validateBSTHelper(node.right, node.val+1, max);
}
//********************************************************************************

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

console.log(validateBSTHelper(bst.root));
