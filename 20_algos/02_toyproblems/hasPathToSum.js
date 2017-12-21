// Tree has path to target sum?

// You are given a binary tree whose nodes all have integer values (both positive and negative).

// Given some target sum (say, 14), return true if there is any path starting from the root and ending in a leaf, such that adding up all the values along the path equals the given sum.

// const hasPathToSum = function(node, targetSum) {
//   // your code here
// };

const hasPathToSum = (tree, target) => {
	return recurse(tree, 0, target);

	function recurse(node, sum, target){
		if(!node){
			return false;
		}
		sum += node.value;
		if(node.left === null && node.right === null){
			if(sum === target){
				return true;
			}else{
				return false;
			}
		}
		return recurse(node.left, sum, target) || recurse(node.right, sum, target);
	}
}

const BinaryTree = function(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

var BT = new BinaryTree(5);
BT.left = new BinaryTree(4);
BT.right = new BinaryTree(8);
BT.left.left = new BinaryTree(11);
BT.left.left.left = new BinaryTree(7);
BT.left.left.right = new BinaryTree(2);
BT.right.left = new BinaryTree(13);
BT.right.right = new BinaryTree(4);
BT.right.right.right = new BinaryTree(1);


var BT1 = new BinaryTree(1);

console.log(hasPathToSum(BT1, 1))//true
console.log(hasPathToSum(BT, 18))//true
console.log(hasPathToSum(BT, 10))//false