import {
	ListNode,
	createLinkedList,
	printLinkedList,
} from '@/data-structure/linked-list'

/**
 * @description 19. 删除链表的倒数第 N 个结点
 * @param head 目标链表
 * @param n 倒数第 N 个结点
 * @returns 删除倒数第 N 个结点后的链表
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	const dummy = new ListNode()
	dummy.next = head
	let p = dummy
	for (let i = 0; i < n + 1; i++) {
		p = p.next
	}

	let pre = dummy
	while (p !== null) {
		p = p.next
		pre = pre.next
	}
	pre.next = pre.next.next

	return dummy.next
}

/**
 * @description 19. 删除链表的倒数第 N 个结点
 */
function run() {
	const arr1 = createLinkedList([1, 2, 3, 4, 5])
	const n1 = 2

	console.log('-----------19. 删除链表的倒数第 N 个结点-----------')

	const removedLink = removeNthFromEnd(arr1, n1)

	console.log(printLinkedList(removedLink))
}

export default run
