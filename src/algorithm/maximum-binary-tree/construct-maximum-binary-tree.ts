import { TreeNode } from '@/data-structure/binary-tree'

/**
 * @description 654. 最大二叉树，medium，https://leetcode.cn/problems/maximum-binary-tree/
 * @param nums
 * @returns
 */
function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
	if (!nums.length) return null

	let curMaxIdx = 0
	const curMax = nums.reduce((a, b, idx) => {
		if (b > a) curMaxIdx = idx

		return Math.max(a, b)
	})

	const root = new TreeNode(curMax)
	root.left = constructMaximumBinaryTree(nums.slice(0, curMaxIdx))
	root.right = constructMaximumBinaryTree(
		nums.slice(curMaxIdx + 1, nums.length),
	)

	return root
}

/**
 * @description 654. 最大二叉树
 */
function run() {
	const arr1 = [3, 2, 1, 6, 0, 5]

	console.log('-----------654. 最大二叉树-----------')
	console.log(constructMaximumBinaryTree(arr1)) // [6,3,5,null,2,0,null,null,1]
}

export default run
