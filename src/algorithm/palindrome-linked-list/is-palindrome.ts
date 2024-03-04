import {
	ListNode,
	createLinkedList,
	printLinkedList,
} from '@/data-structure/linked-list'
import { reverseListIteration } from '@/algorithm/reverse-linked-list/reverse-list-iteration'

/**
 * @description 234. 回文链表，easy，https://leetcode.cn/problems/palindrome-linked-list/
 * @param head
 * @returns
 */
function isPalindrome(head: ListNode | null): boolean {
	let slow = head
	let fast = head
	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}

	if (fast !== null) {
		slow = slow.next
	}

	let reSlow = reverseListIteration(slow)
	let p = head
	while (reSlow !== null) {
		if (reSlow.val !== p.val) return false
		p = p.next
		reSlow = reSlow.next
	}

	return true
}

/**
 * @description 234. 回文链表
 */
function run() {
	const link1 = createLinkedList([1, 2, 3, 4, 5])
	const link2 = createLinkedList([1, 2, 2, 1])

	console.log('-----------234. 回文链表-----------')

	const res1 = isPalindrome(link1)
	const res2 = isPalindrome(link2)

	console.log(printLinkedList(link1), res1) // false
	console.log(printLinkedList(link2), res2) // true
}

export default run
