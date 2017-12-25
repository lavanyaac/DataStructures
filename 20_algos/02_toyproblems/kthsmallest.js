// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note: 
// You may assume k is always valid, 1 ? k ? BST's total elements.

// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

const kthSmallest = (tree, k) => {
	
	const stack = [];
	let node = tree;

	while(stack.length || node){
		if(node){
			stack.push(node);
			node = node.left;
		}else{
			node = stack.pop();
			--k;
			if(k===0){
				return node.val;
			}
			node = node.right;
		}
	}
}

function BinaryTree(val) {
  this.val = val;
  this.left = this.right = null;
}

var BT = new BinaryTree(6);
BT.left = new BinaryTree(4);
BT.right = new BinaryTree(16);
BT.left.left = new BinaryTree(2);
BT.left.left.left = new BinaryTree(1);
BT.left.left.right = new BinaryTree(3);
BT.right.left = new BinaryTree(15);
BT.right.right = new BinaryTree(20);
BT.right.right.left = new BinaryTree(18);
BT.right.right.right = new BinaryTree(21);

console.log(kthSmallest(BT, 5))//6