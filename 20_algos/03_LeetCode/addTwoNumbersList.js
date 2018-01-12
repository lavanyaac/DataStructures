// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


/////////////////////////////////////////////////////////////////////////////////////////

const addTwoNumbers = function(l1, l2) {
	let node1 = l1;
	let node2 = l2;
	let sum;
	let carry = 0;
	let res;
	let currSum;

	while(node1 || node2){
		const n1 = node1 ? node1.val : 0;
		const n2 = node2 ? node2.val : 0;
		sum = n1 + n2 + carry;
		carry = Math.floor(sum/10);
		if(!res){
			res = new ListNode(sum % 10);
			currSum = res;
		}else{
			currSum.next = new ListNode( sum % 10);
			currSum = currSum.next;
		} 

		node1 = node1 ? node1.next : null;
		node2 = node2 ? node2.next : null;
	}

	if(carry){
		currSum.next = new ListNode( carry);
	}
	return res;
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

const LL1 = new ListNode(2);
LL1.next = new ListNode(4);
LL1.next.next = new ListNode(3);


const LL2 = new ListNode(5);
LL2.next = new ListNode(6);
LL2.next.next = new ListNode(4);
LL2.next.next.next = new ListNode(3);

console.log("**********************************")

const sum = addTwoNumbers(LL1, LL2);

printLL(sum);//7, 0, 8, 3
