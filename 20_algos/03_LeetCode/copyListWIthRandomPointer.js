// 138. Copy List with Random Pointer
// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

// The algorithm is composed of the follow three steps which are also 3 iteration rounds.

// Iterate the original list and duplicate each node. The duplicate
// of each node follows its original immediately.
// Iterate the new list and assign the random pointer for each
// duplicated node.
// Restore the original list and extract the duplicated nodes.

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

const copyRandomList = function(head) {
	let iter = head;
	let next;
	let copy;

	//1. Duplicate each node
	while(iter !== null){
		next = iter.next;
		copy = new RandomListNode(iter.label);
		iter.next = copy;
		copy.next = next;
		iter = next;
	}

	//2. Assign random pointers;
	iter = head;
	while(iter !== null){
		if(iter.random !== null){
			iter.next.random = iter.random.next;
		}
		iter = iter.next.next;
	}

	//3. Separate the original and the copy
	iter = head;
	const pseudoHead = new RandomListNode(0);
	let copyIter = pseudoHead;
	while(iter !== null){
		next = iter.next.next;

		copy = iter.next;
		copyIter.next = copy;
		copyIter = copy;

		iter.next = next;
		iter = next;
	}

return pseudoHead.next;
}

//////////////////////////////////////////////////////

function RandomListNode(label) {
     this.label = label;
     this.next = this.random = null;
 }

let nodeArr = [];

function formList(arr, i=0){
  if(i === arr.length){
    return null;
  }
  let node = new RandomListNode(arr[i]);
  nodeArr.push(node);
  node.next = formList(arr, i+1);
  return node;
}
function addRandomPointer(listHead){
  const len = nodeArr.length;
  let  curr = listHead;
  while(curr){
    let rnd = Math.floor(Math.random() * len);
    curr.random = nodeArr[rnd];
    curr = curr.next;
  }
}

function printList(list){
  if(!list){
    return;
  }
  console.log('label: ',list.label, 'rnd: ', list.random.label);
  printList(list.next);
}

const s = [2,3,4,5,6,7];
const n = formList(s);
addRandomPointer(n);
console.log('-------------Original------------');
printList(n);
console.log('--------------Duplicate------------------');
let d = copyRandomList(n);
printList(d);
