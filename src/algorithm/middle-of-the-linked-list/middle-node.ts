import {
	ListNode,
	createLinkedList,
	printLinkedList,
} from '@/data-structure/linked-list'

/**
 * @description 876. 链表的中间结点，easy，https://leetcode.cn/problems/middle-of-the-linked-list/
 * @param head
 * @returns
 */
function middleNode(head: ListNode | null): ListNode | null {
	let fast = head
	let slow = head
	while (fast !== null && fast.next !== null) {
		fast = fast.next.next
		slow = slow.next
	}
	return slow
}

/**
 * @description 876. 链表的中间结点
 */
function run() {
	const link1 = createLinkedList([1, 2, 3, 4, 5, 6])
	const link2 = createLinkedList([1, 2, 3, 4, 5])

	console.log('-----------876. 链表的中间结点-----------')

	const res1 = middleNode(link1)
	const res2 = middleNode(link2)

	console.log(printLinkedList(res1)) // [4, 5, 6]
	console.log(printLinkedList(res2)) // [3, 4, 5]
}

export default run
