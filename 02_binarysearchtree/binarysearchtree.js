function Node(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(){
	this.root = null;
}

BinarySearchTree.prototype.insert = function(val){
	const node = new Node(val);

	if(!this.root){
		this.root = node;
	}else{
		let current = this.root;
		while(current){
			if(node.val < current.val){
				if(!current.left){
					current.left = node;
					break;
				}
				current = current.left;
			}else if(node.val > current.val){
				if(!current.right){
					current.right = node;
					break;
				}
				current = current.right;
			}else{
				break;
			}
		}
	}
};

BinarySearchTree.prototype.inOrderTraveral = function(node = this.root, fn){
	if(!node){
		return;
	}
	if(node.left){ this.inOrderTraveral(node.left, fn); }
	if(fn){ fn(node)}
	if(node.right){ this.inOrderTraveral(node.right, fn); }
};

BinarySearchTree.prototype.preOrderTraveral = function(node = this.root, fn){
	if(!node){
		return;
	}
	if(fn){ fn(node)}
	if(node.left){ this.preOrderTraveral(node.left, fn); }
	if(node.right){ this.preOrderTraveral(node.right, fn); }
};

BinarySearchTree.prototype.postOrderTraveral = function(node = this.root, fn){
	if(!node){
		return;
	}
	if(node.left){ this.postOrderTraveral(node.left, fn); }
	if(node.right){ this.postOrderTraveral(node.right, fn); }
	if(fn){ fn(node)}
};



module.exports = BinarySearchTree;

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(2);
binarySearchTree.insert(4);
binarySearchTree.insert(4);
binarySearchTree.insert(6);
binarySearchTree.insert(8);

function print(node){
	console.log(node.val);
}


binarySearchTree.inOrderTraveral(binarySearchTree.root, print);
console.log("----------");
binarySearchTree.preOrderTraveral(binarySearchTree.root, print);
console.log("----------");
binarySearchTree.postOrderTraveral(binarySearchTree.root, print);
