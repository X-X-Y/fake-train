import {
	ListNode,
	createLinkedList,
	printLinkedList,
} from '@/data-structure/linked-list'
import reverseKRun, { reverseK } from './reverse-k'

/**
 * @description 25. K 个一组翻转链表，hard，https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
 * @param head
 * @param k
 * @returns
 */
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
	const a = head
	let b = head
	for (let i = 0; i < k; i++) {
		if (b === null) return head
		b = b.next
	}
	const newHead = reverseK(a, k)
	a.next = reverseKGroup(b, k)
	return newHead
}

/**
 * @description 25. K 个一组翻转链表
 */
function run() {
	reverseKRun() // 测试翻转链表前k个节点

	const link1 = createLinkedList([1, 2, 3, 4, 5])

	console.log('-----------25. K 个一组翻转链表-----------')

	const res1 = reverseKGroup(link1, 2)

	console.log(printLinkedList(res1)) // [2, 1, 4, 3, 5]
}

export default run
