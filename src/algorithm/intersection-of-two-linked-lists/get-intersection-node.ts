import { ListNode, createLinkedList } from '@/data-structure/linked-list'

/**
 * @description 160. 相交链表，easy，https://leetcode.cn/problems/intersection-of-two-linked-lists/
 * @param headA
 * @param headB
 * @returns 输入两链表相交的节点，若没有相交则返回null
 */
function getIntersectionNode(
	headA: ListNode | null,
	headB: ListNode | null,
): ListNode | null {
	let p1 = headA
	let p2 = headB

	while (p1 !== p2) {
		if (p1 === null) {
			p1 = headB
		} else {
			p1 = p1.next
		}

		if (p2 === null) {
			p2 = headA
		} else {
			p2 = p2.next
		}
	}

	return p1
}

/**
 * @description 160. 相交链表
 */
function run() {
	const common = createLinkedList([8, 4, 5])
	const link1 = createLinkedList([4, 1], 0, common)
	const link2 = createLinkedList([5, 6, 1], 0, common)

	console.log('-----------160. 相交链表-----------')

	const res = getIntersectionNode(link1, link2)

	console.log('两链表相交节点的值：', res.val) // 8
}

export default run
