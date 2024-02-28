import {
	ListNode,
	createLinkedList,
	printLinkedList,
} from '@/data-structure/linked-list'

/**
 * @description 86. 分隔链表，medium，https://leetcode.cn/problems/partition-list/
 * @param head 待分隔链表头节点
 * @param x 目标值
 * @returns 分隔后的链表
 */
function partition(head: ListNode | null, x: number): ListNode | null {
	const dummy1 = new ListNode()
	const dummy2 = new ListNode()
	let p1 = dummy1
	let p2 = dummy2
	let p = head

	while (p !== null) {
		if (p.val >= x) {
			p2.next = p
			p2 = p2.next
		} else {
			p1.next = p
			p1 = p1.next
		}
		const tmp = p.next
		p.next = null
		p = tmp
	}

	p1.next = dummy2.next

	return dummy1.next
}

/**
 * @description 86. 分隔链表
 */
function run() {
	const arr1 = createLinkedList([1, 4, 3, 2, 5, 2])
	const x1 = 3

	console.log('-----------86. 分隔链表-----------')

	const sortedlink = partition(arr1, x1)

	console.log(printLinkedList(sortedlink))
}

export default run
