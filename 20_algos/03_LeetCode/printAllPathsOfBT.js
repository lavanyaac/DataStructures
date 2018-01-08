// Print all the paths from a root to the leaves of a binary tree.  

function printPaths(root){
	const res = [];
	helper(root, [], res);
	return res;

	function helper(node, itemArr, res){
		if(!node){
			return;
		}
		itemArr.push(node.val);

		if(!node.left && !node.right){
			res.push(itemArr.slice());
			itemArr.pop();
			return;
		}
		if(node.left){
			helper(node.left, itemArr, res);
		}
		if(node.right){
			helper(node.right, itemArr, res);
		}
		itemArr.pop();
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

BT.right.right.right = new BinaryTree(15);

console.log(printPaths(BT));