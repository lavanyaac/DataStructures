const BST = require('../binarysearchtree');

//********************************************************************************
// Check if a binary tree is balanced
//********************************************************************************
const checkBalanced = function(node){
	if(!node){
		return true;
	}
	const cache={
		min: Number.MAX_SAFE_INTEGER,
		max: Number.MIN_SAFE_INTEGER
	};
	checkBalanceHelper(node, cache, 0);
	return(cache.max-cache.min <= 1);
};

function checkBalanceHelper(node, cache, depth){
	if(!node){
		if(depth < cache.min){
			cache.min = depth;
		}
		if(depth > cache.max){
			cache.max = depth;
		}
	}else{
		checkBalanceHelper(node.left, cache, depth+1);
		checkBalanceHelper(node.right, cache, depth+1);
	}
}
//********************************************************************************

var bst = new BST();
bst.insert(6);
// bst.insert(5);//uncomment for false
bst.insert(16);
bst.insert(2);
bst.insert(1);
bst.insert(4);
bst.insert(3);
bst.insert(15);
bst.insert(20);


function print(node){
	console.log(node.val);
}
// bst.inOrderTraveral(bst.root, print);//1 2 3 4 5 6 15 16 20

console.log(checkBalanced(bst.root));//
