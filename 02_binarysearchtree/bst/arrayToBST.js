//********************************************************************************
// Minimal Tree: Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary tree with minimal height.
//********************************************************************************
const arrToBST = function(arr){
	if(!arr){
		return null;
	}
	return arrToBSTHelper(arr, 0, arr.length);

	function arrToBSTHelper(arr, start, end){
		if(start >= end){
			return null;
		}
		const mid = Math.floor((start+end)/2);
		const node = new Node(arr[mid]);

		node.left = arrToBSTHelper(arr, start, mid);
		node.right = arrToBSTHelper(arr, mid+1, end);

		return node;
	}
}
//********************************************************************************

function Node(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

const arr = [2,4,7,9,10,27,34,55,66];
const bst = arrToBST(arr);
// console.log(bst.right);
