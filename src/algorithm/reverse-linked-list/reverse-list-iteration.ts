import {
	ListNode,
	createLinkedList,
	printLinkedList,
} from '@/data-structure/linked-list'

/**
 * @description 206. 反转链表（迭代），easy，https://leetcode.cn/problems/reverse-linked-list/
 * @param head
 * @returns
 */
export function reverseListIteration(head: ListNode | null): ListNode | null {
	let pre = null
	let cur = head

	while (cur) {
		const next = cur.next
		cur.next = pre
		pre = cur
		cur = next
	}

	return pre
}

/**
 * @description 206. 反转链表（迭代）
 */
function run() {
	const link1 = createLinkedList([1, 2, 3, 4, 5])
	const link2 = createLinkedList([])

	console.log('-----------206. 反转链表（迭代）-----------')

	const res1 = reverseListIteration(link1)
	const res2 = reverseListIteration(link2)

	console.log(printLinkedList(res1)) // [5, 4, 3, 2, 1]
	console.log(printLinkedList(res2)) // []
}

export default run
