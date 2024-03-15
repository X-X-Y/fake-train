import { TreeNode } from '@/data-structure/binary-tree'

function buildTreeInPost(
	inorder: number[],
	postorder: number[],
): TreeNode | null {
	if (!inorder.length || !postorder.length) return null

	const root = new TreeNode(postorder[postorder.length - 1])

	const rootInInorderIdex = inorder.indexOf(postorder[postorder.length - 1])

	const rightInorder = inorder.slice(rootInInorderIdex + 1, inorder.length)
	const leftInorder = inorder.slice(0, rootInInorderIdex)

	const leftPostorder = postorder.slice(0, leftInorder.length)
	const rightPostorder = postorder.slice(
		leftInorder.length,
		postorder.length - 1,
	)

	root.left = buildTreeInPost(leftInorder, leftPostorder)
	root.right = buildTreeInPost(rightInorder, rightPostorder)

	return root
}

/**
 * @description 106. 从中序与后序遍历序列构造二叉树
 */
function run() {
	const inorder = [9, 3, 15, 20, 7]
	const postorder = [9, 15, 7, 20, 3]

	console.log('-----------106. 从中序与后序遍历序列构造二叉树-----------')
	console.log(buildTreeInPost(inorder, postorder)) // [3,9,20,null,null,15,7]
}

export default run
