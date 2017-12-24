// You are given a binary tree whose nodes all have integer values (both positive and negative).
// Determine which level of the tree is the "largest", i.e., you sum all the node values at that level, 
// and determine which level has the largest sum.
// In the case of a tie, return the level closest to the root.

//               5
//             / \
//             4   8
//           /   / \
//           11  13  4
//         /  \    / \
//         7    2  5   1

const findLargestLevelByDFS = (tree) => {
	let maxValue = Number.NEGATIVE_INFINITY;
	let levelOfmaxValue = Number.MAX_SAFE_INTEGER;
	const byLevel = [];
	dfshelper(tree, 0);
	return levelOfmaxValue;

	function dfshelper(node, depth){
		if(!node){
			return;
		}
		byLevel[depth] = byLevel[depth] || 0;
		byLevel[depth] += node.val;
		if(maxValue < byLevel[depth]){
			maxValue = byLevel[depth];
			levelOfmaxValue = depth;
		}else if(maxValue === byLevel[depth]){
			if(depth < levelOfmaxValue){
				levelOfmaxValue = depth;
			}
		}
		dfshelper(node.left, depth+1);
		dfshelper(node.right, depth+1);
	}
}

const findLargestLevelByBFS = (tree) => {
	const queue = [];
	queue.push(tree);
	let level = 0;
	let counter = 0;
	let maxSum = Number.NEGATIVE_INFINITY; 
	let levelOfMaxSum = Number.MAX_SAFE_INTEGER;

	while(queue.length){
		counter = queue.length;
		let currentSum = 0;
		while(counter > 0){
			const node = queue.shift();
			currentSum += node.val;
			if(node.left){
				queue.push(node.left);
			}
			if(node.right){
				queue.push(node.right);
			}
			--counter;
		}
		if(maxSum < currentSum){
			maxSum = currentSum;
			levelOfmaxValue = level;
		}
		++level;
	}

	return levelOfmaxValue;
}


function BinaryTree(val) {
  this.val = val;
  this.left = this.right = null;
}

var BT = new BinaryTree(35);
BT.left = new BinaryTree(4);
BT.right = new BinaryTree(28);
BT.left.left = new BinaryTree(11);
BT.left.left.left = new BinaryTree(7);
BT.left.left.right = new BinaryTree(2);
BT.right.left = new BinaryTree(13);
BT.right.right = new BinaryTree(4);
BT.right.right.left = new BinaryTree(5);
BT.right.right.right = new BinaryTree(41);


console.log(findLargestLevelByDFS(BT));//3
console.log(findLargestLevelByBFS(BT));//3