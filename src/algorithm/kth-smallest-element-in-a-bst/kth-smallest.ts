import { TreeNode, createBinaryTree } from '@/data-structure/binary-tree'

/**
 * @description 230. 二叉搜索树中第K小的元素，medium，https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
 * @param root
 * @param k
 * @returns
 */
function kthSmallest(root: TreeNode | null, k: number): number {
	let curRank = 0
	let res = null

	function traverse(r: TreeNode | null): void {
		if (r === null) return null
		traverse(r.left)
		curRank++
		if (curRank === k) {
			res = r.val
			return null
		}
		traverse(r.right)
	}

	traverse(root)

	return res
}

/**
 * @description 230. 二叉搜索树中第K小的元素
 */
function run() {
	const arr1 = [5, 3, 6, 2, 4, null, null, 1]
	const k1 = 3

	const tree1 = createBinaryTree(arr1)

	console.log('-----------230. 二叉搜索树中第K小的元素-----------')
	console.log(kthSmallest(tree1, k1)) // 3
}

export default run
