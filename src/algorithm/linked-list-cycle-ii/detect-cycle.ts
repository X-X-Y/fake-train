import { ListNode, createLinkedList } from '@/data-structure/linked-list'

/**
 * @description 142. 环形链表 II，medium，https://leetcode.cn/problems/linked-list-cycle-ii/
 * @param head
 * @returns 环形链表环起始节点，若没有环则返回null
 */
function detectCycle(head: ListNode | null): ListNode | null {
	let fast = head
	let slow = head

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next
		slow = slow.next
		if (fast === slow) break
	}

	if (fast === null || fast.next === null) return null

	slow = head
	while (fast !== slow) {
		fast = fast.next
		slow = slow.next
	}

	return slow
}

/**
 * @description 142. 环形链表 II
 */
function run() {
	const link1 = createLinkedList([3, 2, 0, -4], 2)
	const link2 = createLinkedList([1, 2], 1)

	console.log('-----------142. 环形链表 II-----------')

	const res1 = detectCycle(link1)
	const res2 = detectCycle(link2)

	console.log('环形链表1环起点位置值：', res1.val) // 2
	console.log('环形链表2环起点位置值：', res2.val) // 1
}

export default run
