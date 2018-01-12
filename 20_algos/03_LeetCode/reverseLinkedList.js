// 206. Reverse Linked List
// Reverse a singly linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/////////////////////////////////////////////////////////////////////////////////////////

const reverseListIter = function(head) {
	let prev = null;
	while(head){
		const curr = head;
		head = head.next;
		curr.next = prev;
		prev = curr;
	}
	return prev;
};

const reverseListRecur = function(head){
	return helper(head);

	function helper(node, prev=null){
		if(!node){
			return prev;
		}
		const n = node.next;
		node.next = prev;
		return helper(n, node);
	}
}


/////////////////////////////////////////////////////////////////////////////////////////

function ListNode(val) {
 this.val = val;
 this.next = null;
}

function printLL(head){
	let curr = head;
	while(curr){
		console.log(curr.val);
		curr = curr.next;
	}
}

const LL = new ListNode(3);
LL.next = new ListNode(2);
LL.next.next = new ListNode(8);
LL.next.next.next = new ListNode(10);
LL.next.next.next.next = new ListNode(1);

printLL(LL);//3,2,8,10,1
console.log("**********************************")
// const RLL = reverseListIter(LL);
// printLL(RLL);//1,10,8,2,3
console.log("**********************************")
const RRLL = reverseListRecur(LL);
printLL(RRLL);//1,10,8,2,3




