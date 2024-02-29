/**
 * @description 单链表节点类定义
 */
class ListNode {
	public val: number
	public next: ListNode | null

	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

/**
 * @description 传入值数组，创建链表
 * @param arr 待创建链表各节点值数组
 * @param cid 可选，值表示环形链表起始位置，从1开始，无值代表非环形
 * @returns 表头节点
 */
function createLinkedList(
	arr: number[],
	cid?: number,
	joinHead?: ListNode,
): ListNode {
	const dummy = new ListNode()
	let p = dummy
	const _cid = cid - 1
	let circleNode = null

	arr.forEach((item, idx) => {
		p.next = new ListNode(item)
		if (idx === _cid) circleNode = p.next
		p = p.next
	})

	if (circleNode) {
		p.next = circleNode
	} else if (joinHead) {
		p.next = joinHead
	}

	return dummy.next
}

/**
 * @description 将输入链表各节点值用-->连成字符串
 * @param p 待打印链表
 * @returns 输入链表值组成的字符串
 */
function printLinkedList(p: ListNode): string {
	let res = ''
	let curNode = p

	while (curNode) {
		res += curNode.val + ' --> '
		curNode = curNode.next
	}

	res += 'null'

	return res
}

export { ListNode, createLinkedList, printLinkedList }
