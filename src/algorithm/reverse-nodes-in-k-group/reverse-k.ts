import {
	ListNode,
	createLinkedList,
	printLinkedList,
} from '@/data-structure/linked-list'

/**
 * @description 翻转链表前k个节点
 * @param head
 * @param k
 * @returns
 */
export function reverseK(head: ListNode | null, k: number): ListNode | null {
	// let dummy = new ListNode()
	// dummy.next = head
	// let pre = dummy
	// let cur = head
	// let count = 1

	// while(count < k) {
	//   const next = cur.next
	//   cur.next = next.next
	//   next.next = pre.next
	//   pre.next = next
	//   count++
	// }

	// return dummy.next

	let pre = null
	let cur = head
	let next = head
	let count = 0

	while (count < k) {
		next = cur.next
		cur.next = pre
		pre = cur
		cur = next
		count++
	}

	head.next = cur

	return pre
}

/**
 * @description 翻转链表前k个节点
 */
function run() {
	const link1 = createLinkedList([1, 2, 3, 4, 5])

	console.log('-----------翻转链表前k个节点-----------')

	const res1 = reverseK(link1, 3)

	console.log(printLinkedList(res1)) // [3, 2, 1, 4, 5]
}

export default run
