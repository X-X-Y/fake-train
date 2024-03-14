import { TreeNode, createBinaryTree } from '@/data-structure/binary-tree'

/**
 * @description 226. 翻转二叉树（动态规划），easy，https://leetcode.cn/problems/invert-binary-tree/
 * @param root
 * @returns
 */
function invertTreeDp(root: TreeNode | null): TreeNode | null {
	if (root === null) return root

	const left = invertTreeDp(root.left)
	const right = invertTreeDp(root.right)

	root.left = right
	root.right = left

	return root
}

/**
 * @description 226. 翻转二叉树（动态规划）
 */
function run() {
	const arr1 = [4, 2, 7, 1, 3, 6, 9]

	const tree1 = createBinaryTree(arr1)

	console.log('-----------226. 翻转二叉树（动态规划）-----------')
	console.log(invertTreeDp(tree1)) // [4,7,2,9,6,3,1]
}

export default run
