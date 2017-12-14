const BST = require('../binarysearchtree');

//********************************************************************************
// Traversals in iterative method
//********************************************************************************

const inOrderIter = function(bst, fn){
	const stack = [];
	let node = bst.root;

	while(stack.length > 0||node){
		if(node){
			stack.push(node);
			node = node.left;
		}else{
			node = stack.pop();
			fn(node);
			node = node.right;
		}
	}
}

//********************************************************************************
const preOrderIter = function(bst, fn){
	const stack = [];
	let node = bst.root;
	stack.push(node);
	while(stack.length){
		node = stack.pop();
		fn(node);
		if(node.right){
			stack.push(node.right);
		}
		if(node.left){
			stack.push(node.left);
		}
	}
}
//********************************************************************************
const postOrderIter = function(bst, fn){
	const stack = [];
	let node = bst.root;

	stack.push(node);

	while(stack.length){
		const tempNode = stack[stack.length - 1];
		if(!tempNode.left && !tempNode.right){
			fn(stack.pop());
		}else{
			if(tempNode.right){
				stack.push(tempNode.right);
				tempNode.right = null;
			}
			if(tempNode.left){
				stack.push(tempNode.left);
				tempNode.left = null;
			}
		}
	}
}
//********************************************************************************

//********************************************************************************

var bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(4);
bst.insert(6);
bst.insert(8);

function print(node){
	console.log(node.val);
}


// inOrderIter(bst, print);//2 3 4 5 6 7 8
console.log("----------");
// preOrderIter(bst, print);//5 3 2 4 7 6 8
console.log("----------");
postOrderIter(bst, print); //2 4 3 6 8 7 5