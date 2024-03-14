import { TreeNode, createBinaryTree } from '@/data-structure/binary-tree'

/**
 * @description 226. 翻转二叉树（回溯），easy，https://leetcode.cn/problems/invert-binary-tree/
 * @param root
 * @returns
 */
function invertTreeBack(root: TreeNode | null): TreeNode | null {
	function traverse(root) {
		if (root === null) return root

		const temp = root.left
		root.left = root.right
		root.right = temp

		traverse(root.left)
		traverse(root.right)
	}

	traverse(root)

	return root
}

/**
 * @description 226. 翻转二叉树（回溯）
 */
function run() {
	const arr1 = [4, 2, 7, 1, 3, 6, 9]

	const tree1 = createBinaryTree(arr1)

	console.log('-----------226. 翻转二叉树（回溯）-----------')
	console.log(invertTreeBack(tree1)) // [4,7,2,9,6,3,1]
}

export default run
