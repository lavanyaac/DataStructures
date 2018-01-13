// 234. Palindrome Linked List
// Given a singly linked list, determine if it is a palindrome.

// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(node) {
	let count =0;
	let ptr1 = node;

	while(ptr1){
		ptr1 = ptr1.next;
		++count;
	}

	const stack = [];
	ptr1 = node;
	const mid = Math.floor(count/2);

	for(let i = 0; i < mid; i++){
		stack.push(ptr1);
		ptr1 = ptr1.next;
	}

	ptr1 = (count % 2) ? ptr1.next: ptr1;
	while(ptr1){
		const curr = stack.pop();
		if(ptr1.val !== curr.val){
			return false;
		}
		ptr1 = ptr1.next;
	}
	return stack.length === 0;
}

/////////////////////////////////////////////////////////////////////////////////////////

function ListNode(val) {
 this.val = val;
 this.next = null;
}


const LL = new ListNode(3);
LL.next = new ListNode(2);
LL.next.next = new ListNode(8);
LL.next.next.next = new ListNode(2);
LL.next.next.next.next = new ListNode(3);

console.log(isPalindrome(LL));//true