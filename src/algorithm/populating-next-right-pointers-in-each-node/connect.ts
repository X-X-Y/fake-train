class Node {
	val: number
	left: Node | null
	right: Node | null
	next: Node | null
	constructor(val?: number, left?: Node, right?: Node, next?: Node) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
		this.next = next === undefined ? null : next
	}
}

/**
 * @description 116. 填充每个节点的下一个右侧节点指针，medium，https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/
 * @param root
 * @returns
 */
function connect(root: Node | null): Node | null {
	function traverse(left: Node | null, right: Node | null): void {
		if (left === null || right === null) return

		left.next = right

		traverse(left.left, left.right)
		traverse(right.left, right.right)
		traverse(left.right, right.left)
	}

	if (root === null) return root

	traverse(root.left, root.right)

	return root
}

export default connect
