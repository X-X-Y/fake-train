import { TreeNode, createBinaryTree } from '@/data-structure/binary-tree'

/**
 * @description 104. 二叉树的最大深度（回溯），easy，https://leetcode.cn/problems/maximum-depth-of-binary-tree/
 * @param root
 * @returns
 */
function maxDepthBack(root: TreeNode | null): number {
	let res = 0
	let curDepth = 0

	const reverse = function (r) {
		if (r === null) return

		curDepth++

		if (r.left === null && r.right === null) res = Math.max(res, curDepth)

		reverse(r.left)
		reverse(r.right)

		curDepth--
	}

	reverse(root)

	return res
}

/**
 * @description 104. 二叉树的最大深度（回溯）
 */
function run() {
	const arr1 = [3, 9, 20, null, null, 15, 7]

	const tree1 = createBinaryTree(arr1)

	console.log('-----------104. 二叉树的最大深度（回溯）-----------')
	console.log(tree1, '----->', maxDepthBack(tree1)) // 3
}

export default run
