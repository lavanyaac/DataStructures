/////////////////////////////////////////////////////////////////////////////////////////////////////////
//18. Merge 2 Sorted Lists
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {

	if(!l1 &&!l2){
		return null;
	}

	if(!l1 && l2){
		return l2;
	}

	if(!l2 && l1){
		return l1;
	}

	let mergeHead;
	if(l1.val <= l2.val){
		mergeHead = l1;
		mergeHead.next = mergeTwoLists(l1.next, l2);
	}else{
		mergeHead = l2;
		mergeHead.next = mergeTwoLists(l1, l2.next);
	}
	return mergeHead;
};

///////////////////////////////////////////////////////////////////////////////////////
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const LL1 = new ListNode(5);
LL1.next = new ListNode(6);
LL1.next.next = new ListNode(9);
LL1.next.next.next = new ListNode(10);
LL1.next.next.next.next= new ListNode(15);


const LL2 = new ListNode(2);
LL2.next = new ListNode(3);
LL2.next.next = new ListNode(7);
LL2.next.next.next = new ListNode(8);
LL2.next.next.next.next = new ListNode(14);

const res = mergeTwoLists(LL1, LL2);

let curr = res;
while(curr){
	console.log(curr.val);
	curr = curr.next;
}
//2,3,5,6,7,8,9,10,14,15
//////////////////////////////////////////////////////////////////////////////////////////////////////////