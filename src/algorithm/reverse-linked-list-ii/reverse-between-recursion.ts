import {
	ListNode,
	createLinkedList,
	printLinkedList,
} from '@/data-structure/linked-list'

/**
 * @description 92. 反转链表 II（递归），medium，https://leetcode.cn/problems/reverse-linked-list-ii/
 * @param head
 * @param left
 * @param right
 * @returns
 */
function reverseBetweenRecursion(
	head: ListNode | null,
	left: number,
	right: number,
): ListNode | null {
	/**
	 * @description 反转链表前k位节点
	 * @param head
	 * @param k
	 * @returns
	 */
	const reverseK = (head, k) => {
		let end = new ListNode()
		const _reverseK = (head, k) => {
			if (k === 1) {
				end = head.next
				return head
			}

			const last = _reverseK(head.next, k - 1)
			head.next.next = head
			head.next = end
			return last
		}
		return _reverseK(head, k)
	}

	if (left === 1) {
		return reverseK(head, right)
	}
	head.next = reverseBetweenRecursion(head.next, left - 1, right - 1)
	return head
}

/**
 * @description 92. 反转链表 II（递归）
 */
function run() {
	const link1 = createLinkedList([1, 2, 3, 4, 5])

	console.log('-----------92. 反转链表 II（递归）-----------')

	const res1 = reverseBetweenRecursion(link1, 2, 4)

	console.log(printLinkedList(res1)) // [1, 4, 3, 2, 5]
}

export default run
