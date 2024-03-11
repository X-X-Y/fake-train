class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

function createBinaryTree(arr: any[]): TreeNode {
	if (!arr.length) return

	const root = new TreeNode(arr.shift())

	const nodeStack = [root]

	while (arr.length) {
		const leftNode = new TreeNode(arr.shift())

		const recentNode = nodeStack.shift()
		recentNode.left = leftNode
		nodeStack.push(leftNode)

		if (!arr.length) return

		const rightNode = new TreeNode(arr.shift())
		recentNode.right = rightNode
		nodeStack.push(rightNode)
	}

	return root
}

export { TreeNode, createBinaryTree }
