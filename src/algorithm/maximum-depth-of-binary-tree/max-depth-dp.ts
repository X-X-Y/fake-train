import { TreeNode, createBinaryTree } from '@/data-structure/binary-tree'

/**
 * @description 104. 二叉树的最大深度（动态规划），easy，https://leetcode.cn/problems/maximum-depth-of-binary-tree/
 * @param root
 * @returns
 */
function maxDepthDp(root: TreeNode | null): number {
	if (root === null) return 0

	const leftDepth = maxDepthDp(root.left)
	const rightDepth = maxDepthDp(root.right)

	return Math.max(leftDepth, rightDepth) + 1
}

/**
 * @description 104. 二叉树的最大深度（动态规划）
 */
function run() {
	const arr1 = [3, 9, 20, null, null, 15, 7]

	const tree1 = createBinaryTree(arr1)

	console.log('-----------104. 二叉树的最大深度（动态规划）-----------')
	console.log(tree1, '----->', maxDepthDp(tree1)) // 3
}

export default run
