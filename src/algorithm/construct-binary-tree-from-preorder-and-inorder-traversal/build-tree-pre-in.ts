import { TreeNode } from '@/data-structure/binary-tree'

/**
 * @description 105. 从前序与中序遍历序列构造二叉树，medium，https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @param preorder
 * @param inorder
 * @returns
 */
function buildTreePreIn(
	preorder: number[],
	inorder: number[],
): TreeNode | null {
	if (!preorder.length || !inorder.length) return null

	const root = new TreeNode(preorder[0])

	const rootInInorderIdx = inorder.indexOf(preorder[0])
	const leftInorder = inorder.slice(0, rootInInorderIdx)
	const rightInorder = inorder.slice(rootInInorderIdx + 1, inorder.length)

	const leftPreorder = preorder.slice(1, leftInorder.length + 1)
	const rightPreorder = preorder.slice(leftInorder.length + 1, preorder.length)

	root.left = buildTreePreIn(leftPreorder, leftInorder)
	root.right = buildTreePreIn(rightPreorder, rightInorder)

	return root
}

/**
 * @description 105. 从前序与中序遍历序列构造二叉树
 */
function run() {
	const preorder = [3, 9, 20, 15, 7]
	const inorder = [9, 3, 15, 20, 7]

	console.log('-----------105. 从前序与中序遍历序列构造二叉树-----------')
	console.log(buildTreePreIn(preorder, inorder)) // [6,3,5,null,2,0,null,null,1]
}

export default run
