import {
	ListNode,
	createLinkedList,
	printLinkedList,
} from '@/data-structure/linked-list'

/**
 * @description 92. 反转链表 II（迭代），medium，https://leetcode.cn/problems/reverse-linked-list-ii/
 * @param head
 * @param left
 * @param right
 * @returns
 */
function reverseBetweenIteration(
	head: ListNode | null,
	left: number,
	right: number,
): ListNode | null {
	const dummy = new ListNode()
	dummy.next = head
	let pre = dummy

	for (let i = 1; i < left; i++) {
		pre = pre.next
	}
	const cur = pre.next

	while (left < right) {
		const next = cur.next
		cur.next = next.next
		next.next = pre.next // 重要：此处不能是cur，cur表示只是前一位，而不是头部
		pre.next = next
		left++
	}

	return dummy.next
}

/**
 * @description 92. 反转链表 II（迭代）
 */
function run() {
	const link1 = createLinkedList([1, 2, 3, 4, 5])

	console.log('-----------92. 反转链表 II（迭代）-----------')

	const res1 = reverseBetweenIteration(link1, 2, 4)

	console.log(printLinkedList(res1)) // [1, 4, 3, 2, 5]
}

export default run
