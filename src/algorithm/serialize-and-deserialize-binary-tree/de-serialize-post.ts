import { TreeNode, createBinaryTree } from '@/data-structure/binary-tree'

/**
 * @description 297. 二叉树的序列化与反序列化-后序/序列化，hard，https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
 * @param root
 * @returns
 */
function serializePost(root: TreeNode | null): string {
	const res = []

	function _serialize(root: TreeNode): void {
		if (root === null) {
			res.push('null')
			return null
		}
		_serialize(root.left)
		_serialize(root.right)
		res.push(root.val)
	}

	_serialize(root)

	return res.join()
}

/**
 * @description 297. 二叉树的序列化与反序列化-后序/序列化，hard，https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
 * @param data
 * @returns
 */
function deserializePost(data: string): TreeNode | null {
	if (!data.length) return null
	const nodeList = data.split(',')

	function _deserialize(list: string[]): TreeNode {
		const curVal = list.pop()
		if (curVal === 'null') return null
		const curNode = new TreeNode(parseInt(curVal))
		curNode.right = _deserialize(list)
		curNode.left = _deserialize(list)

		return curNode
	}

	return _deserialize(nodeList)
}

/**
 * @description 297. 二叉树的序列化与反序列化-后序
 */
function run() {
	const arr1 = [1, 2, 3, null, null, 4, 5]

	const tree1 = createBinaryTree(arr1)

	console.log('-----------297. 二叉树的序列化与反序列化-后序-----------')
	console.log(deserializePost(serializePost(tree1))) // [1,2,3,null,null,4,5]
}

export default run
